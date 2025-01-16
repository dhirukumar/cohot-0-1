const jwt = require("jsonwebtoken");
const jwtpassword = "1234"; 
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log("Authorization Header:", authHeader); // Debug log
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({ message: "Token missing or malformed" });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, jwtpassword);
        console.log("Decoded Token:", decoded); // Debug log
        
        if (decoded.userId) {
            req.userId = decoded.userId;
            next();
        } else {
            return res.status(403).json({ message: "Token does not contain userId" });
        }
    } catch (err) {
        return res.status(403).json({ message: "Invalid or expired token", error: err.message });
    }
};
module.exports = {
    authMiddleware
} 