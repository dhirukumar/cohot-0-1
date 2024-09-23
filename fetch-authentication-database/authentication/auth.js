const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const port = 3000;

app.use(express.json());

const jwtpassword = "your_jwt_secret_key"; // Define the JWT secret

const ALL_USER = [
  {
    username: 'dhiru@gmail.com',
    password: "123",
    name: "dhiru"
  },
  {
    username: 'ankit@gmail.com',
    password: "123",
    name: "ankit"
  },
  {
    username: 'tappu@gmail.com',
    password: "123",
    name: "tappu"
  }
];

// Function to verify if the user exists
function ouruser(username, password) {
  for (let i = 0; i < ALL_USER.length; i++) {
    if (ALL_USER[i].username === username && ALL_USER[i].password === password) {
      return true;
    }
  }
  return false;
}

// Sign-in route
app.post("/signin", function (req, res) {
  const { username, password } = req.body;

  if (!ouruser(username, password)) {
    return res.status(404).json({
      msg: "User not exists in memory database"
    });
  }

  const token = jwt.sign({ username: username }, jwtpassword);
  res.json({
    token
  });
});

// Get user route
app.get("/user", (req, res) => {
  const token = req.headers.authorization;

  try {
    const decode = jwt.verify(token, jwtpassword);
    const username = decode.username;

  
    res.json({
      msg: "Token is valid",
      username
    });
  } catch (error) {
    res.status(500).json({
      msg: "Invalid token"
    });
  }
});

app.listen(port, function () {
  console.log(`Server is hosted on port ${port}`);
});
