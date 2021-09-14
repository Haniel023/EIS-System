// auth middleware

const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try{
        const token = req.header('x-auth-token');
        jwt.verify(token, "longer-is-better");
        next();
    }
    catch(error) {
        res.stat(401).json({
            message:'Token cannot authorize'
        });
    }
}