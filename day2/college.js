const express = require('express');
const router = express.Router();

// const collegeRouter = require('./college');
// //mysql connection

const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "rinju",
    password: "rinju",
    database: "pokhrel",
    port: 3306,
});
//connection
connection.connect((err) => {
    if (err) {
        console.log("error in connection", err);
    }
    else {
        console.log("connected");
    }
});

// connection.query("select * from colleges", (err, result) => {
//     if (err) {
//         console.log("error in query colleges", err);
//     }
//     else {
//         console.log("college data is", result);
//     }
// });
// app.use('/college', collegeRouter);

// app.listen(4000, () => {
//     console.log('Express is running on port 4000');
// });
router.get('/',(req,res) => {
    connection.query("select * from colleges", (err, results) => {
    if (err) {
        console.log("error in query colleges", err);
    }
    else {
        res.send(results);
    }
});
});
router.get('/detail/:id',(req,res) => {
    const collegeid = req.params.id;
    connection.query(`select * from colleges where id = ${collegeid}`, (err, results) => {
    if (err) {
        console.log("error in query colleges", err);
    }
    else {
        console.log("college data is", results)
        res.send(results);
    }
});

   
   
    // res.send(`this is a college route`);
});
//reduce  gareako
router.get("/search/:name",async(req,res) => {
    const name = req.params.name;
    const results = await  new Promise((resolve,reject)=> {
  
    connection.query(`select * from colleges where name = '${name}'`, (err, results) => {
    if (err) reject(err);
        resolve(results);

      } 
     );
 });

res.send(results);
});

module.exports = router;


