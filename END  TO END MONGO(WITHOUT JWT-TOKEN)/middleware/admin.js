const { Admin } = require("../index");

function AdminMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password; 

    // Find the Admin by username and password
    Admin.findOne({ username: username, password: password })
        .then(function (Admin) {
            if (Admin) {
                next(); // Admin exists, proceed to the next middleware or route
            } else {
                res.status(403).json({
                    msg: "Admin does not exist" // If Admin is not found
                });
            }
        })
      
}

module.exports = AdminMiddleware;

