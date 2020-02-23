const mysql = require("mysql2");
const fs = require("fs");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "js06",
    password: "123"
})

module.exports = {
    async addNewsData(request) {
        let { title, content, type } = request.body;
        let addTime = new Date().getFullYear();
        // 文件处理;把临时路径转存成永久路径；转存：复制；
        if (!fs.existsSync("static/uploads")) {
            // 没有uploads文件夹；
            fs.mkdirSync("static/uploads");
        }
        let imgPath = request.files.img.path;
        let imgName = request.files.img.name;
        fs.writeFileSync("static/uploads/" + imgName, fs.readFileSync(imgPath));
        let imgUrl = "/uploads/" + imgName;
        // 数据及文件路径添加到数据库；
        let [rows] = await connection.promise().query("INSERT INTO news (title,imgUrl,`from`,newTime) VALUES (?,?,?,?)", [title, imgUrl, type, addTime]);
        return rows;
    }
}