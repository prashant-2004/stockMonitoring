// routes/stockRoutes.js

const express = require('express');
const router = express.Router();
const request = require('request');
const cors = require("cors");

router.use(cors());
// Route to fetch stock data
router.get('/stocks/:symbol', (req, res) => {
    const symbol = req.params.symbol;
    const apiKey = process.env.ALPHA_VANTAGE_API_KEY; 
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${apiKey}`;

    request.get({
        url: url,
        json: true,
        headers: { 'User-Agent': 'request' }
    }, (err, response, data) => {
        if (err) {
            res.status(500).json({ error: 'Internal Server Error' });
        } else if (response.statusCode !== 200) {
            res.status(response.statusCode).json({ error: 'Error fetching stock data' });
        } else {
            res.json(data);
        }
    });
});

module.exports = router;
