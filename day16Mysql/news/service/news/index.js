const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "js06",
    password: "123"
})

module.exports = {
    async getData() {
        let [rows] = await connection.promise().query("SELECT * FROM news");
        //  console.log();  
        return rows;
    }
}