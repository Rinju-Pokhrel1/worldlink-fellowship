const express = require('express');
// const app = express();
// const profileRouter = require('./profile'); 
// const userRouter = require('./user'); //importing the user route file
// //importing the route file

// app.get('/',(req,res) => {
//     console.log('Hello world');
//     res.send('hello world')


// });
// app.use("/profile",profileRouter);
// app.use('/user',userRouter)
// //listen-port

const collegeRouter = require('./college');


const app = express();

//mysql connection

// const mysql = require('mysql2');
// const connection = mysql.createConnection({
//     host: "127.0.0.1",
//     user: "rinju",
//     password: "rinju",
//     database: "pokhrel",
//     port: 3306,
// });
// //connection
// connection.connect((err) => {
//     if (err) {
//         console.log("error in connection", err);
//     }
//     else {
//         console.log("connected");
//     }
// });

// connection.query("select * from colleges", (err, result) => {
//     if (err) {
//         console.log("error in query colleges", err);
//     }
//     else {
//         console.log("college data is", result);
//     }
// });
app.use('/college', collegeRouter);

app.listen(4000, () => {
    console.log('Express is running on port 4000');
});