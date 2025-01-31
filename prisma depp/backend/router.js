import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const router = Router();

router.post("/dashboard", async (req, res) => {
    const { name, email } = req.body;

    // Simple validation for name and email
    if (!name || !email) {
        return res.status(400).json({ message: "Name and email are required" });
    }

    try {
        // Insert data into the demo table
        const newDemo = await prisma.demo.create({
            data: {
                name: name,
                email: email
            }
        });

        // Respond with a success message and inserted data
        return res.json({
            message: "Data submitted successfully",
            name: newDemo.name,
            email: newDemo.email
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

export default router;
