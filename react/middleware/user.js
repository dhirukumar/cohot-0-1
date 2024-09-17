const { User } = require("../index.js");

function UserMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password; 

    // Find the user by username and password
    User.findOne({ username: username, password: password })
        .then(function (user) {
            if (user) {
                next(); // User exists, proceed to the next middleware or route
            } else {
                res.status(403).json({
                    msg: "User does not exist" // If user is not found
                });
            }
        })
      
}

module.exports = UserMiddleware;
