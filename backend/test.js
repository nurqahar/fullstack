import mysql from "mysql";

let db = mysql.createConnection({
  host: "172.20.144.1",
  port: 3306,
  user: "user1",
  password: "user1",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected");
});
