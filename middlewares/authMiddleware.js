const { auth } = require("../config/firebase");
const logger = require("../config/logger");

const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        logger.warn("Unauthorized: No token provided");
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    try {
        const decodedToken = await auth.verifyIdToken(token);
        req.user = decodedToken;
        logger.info(`✅ User authenticated: ${decodedToken.email}`);
        next();
    } catch (error) {
        logger.error("❌ Unauthorized: Invalid token", error);
        res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
};

module.exports = verifyToken;
