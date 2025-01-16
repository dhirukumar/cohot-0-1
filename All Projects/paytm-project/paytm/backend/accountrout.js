const express=require("express");
const router=express.Router()
const {authMiddleware}=require("./midd")
const {account}=require("./mongo")
const mongoose=require("mongoose")

router.get("/balance", authMiddleware, async (req, res) => {
    const Account = await account.findOne({
        userId:req.userId
    });
    res.json({
        balance:Account.balance
    })
});

router.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();
  
    try {
      const {amount,to} = req.body;
  
      // Check sender's account
      const myAccount = await account.findOne({ userId: req.userId }).session(session);
      if (!myAccount || myAccount.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({ message: "Insufficient balance" });
      }
  
      // Check recipient's account
      const toAccount = await account.findOne({ userId: to }).session(session);
      if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({ message: "Invalid account" });
      }
  
      // Perform the transfer
      await account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
      await account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);
  
      // Commit the transaction
      await session.commitTransaction();
      res.json({ message: "Transfer successful" });
    } catch (error) {
      // Abort the transaction on error
      await session.abortTransaction();
      res.status(500).json({ message: "Transfer failed", error: error.message });
    } 
    // finally {
    //   // End the session
    //   session.endSession();
    // }
  });
  
  module.exports = router;
  
