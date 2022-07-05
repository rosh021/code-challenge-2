import mysql from "mysql";

const connect = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});
connect.connect();
// connect.connect((error) => {
//   if (error) {
//     error && console.log(error);
//   } else {
//     console.log("Connect to DB");
//   }
// });
export default connect;
