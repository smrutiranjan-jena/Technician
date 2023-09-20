const jwt = require('jsonwebtoken')
const authenticateUser = (req, res, next) => {
    let token = req.headers['o-auth']
    if (token) {
        token = token.split(' ')[1]
        try {
            const tokenData = jwt.verify(token, "smrutilasya")
            req.user = {
                id: tokenData.id,
                role:tokenData.role
            }
            next()
        } catch (e) {
            res.status(401).json({ message: "invalid token" })
        }
    } else {
        res.status(400).json({ message: "token not provided" })
    }
}

module.exports = authenticateUser