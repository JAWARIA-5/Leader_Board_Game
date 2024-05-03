const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "leaderboard",
    password: "Jiapostgres",
    port: 5432,
});

module.exports = pool;
