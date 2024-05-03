const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

const leaderboardModel = require("./datafetch");
const pool = require('./db');
app.use(express.json());
app.use(cors());
app.get('/', async (req, res) => {
    try {
      const leaderboardData = await leaderboardModel.getLeaderboardData();
      res.status(200).json(leaderboardData);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Database not found' });
    }
});

app.listen(port, () => {
    console.log(`Server has start on port ${port}.`)
});