// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// Use CORS to allow cross-origin requests
app.use(cors());

// Middleware to parse incoming JSON data
app.use(bodyParser.json());

// Serve static files (HTML page) from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// POST route to handle location data from the client
app.post('/store-location', (req, res) => {
    const { latitude, longitude } = req.body;

    // Print the location data to the server console
    console.log(`Received location: Latitude = ${latitude}, Longitude = ${longitude}`);

    // Here you could store the data in a database or process it
    res.json({ status: 'success', message: 'Location received successfully.' });
});

// Serve the index.html page for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
