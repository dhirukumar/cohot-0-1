const express = require('express');
const app = express();
const port = 2000;

// Initialize the request counter for each user
let numberOfRequestsForUser = {};

// Clear the request counter every 1 second
setInterval(() => {
    numberOfRequestsForUser = {}; // Reset for all users every second
}, 1000);

// Global middleware to rate limit
app.use((req, res, next) => {
    const userId = req.headers['user-id'];

    if (!userId) {
        return res.status(400).send("User ID is required in headers.");
    }

    // Initialize request count if it doesn't exist
    if (!numberOfRequestsForUser[userId]) {
        numberOfRequestsForUser[userId] = 0;
    }

    // Increment the request count
    numberOfRequestsForUser[userId]++;

    // Check if the user has exceeded the 5 request per second limit
    if (numberOfRequestsForUser[userId] > 5) {
        return res.status(404).send("You have exceeded the 5 requests per second limit.");
    }

    next();
});

// Sample routes
app.get('/user', (req, res) => {
    res.status(200).json({ name: 'john' });
});

app.post('/user', (req, res) => {
    res.status(200).json({ msg: 'created dummy user' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;
