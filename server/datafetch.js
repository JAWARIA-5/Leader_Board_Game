const pool = require('./db'); 

const getLeaderboardData = async () => {
    try {
        return await new Promise(function (resolve, reject) {
            pool.query("SELECT * FROM gameleaderboard ORDER BY score DESC", (error, results) => {
                if (error) {
                    reject(error);
                }
                if (results && results.rows) {
                    resolve(results.rows);
                } else {
                    reject(new Error("No results found"));
                }
            });
        });
    } catch (error_1) {
        console.error(error_1);
        throw new Error("Internal server error");
    }
};

module.exports = {
    getLeaderboardData
};
