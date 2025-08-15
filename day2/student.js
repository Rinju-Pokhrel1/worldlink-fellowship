const express = require('express');
const router = express.Router();


// const collegeRouter = require('./college');
// //mysql connection

const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "rinju",
    password: "rinju",
    database: "rinju",
    port: 3306,
});
//connection
connection.connect((err) => {
    if (err) {
        console.log("error in connection", err);
    } else {
        console.log("connected");
    }
});
router.get('/', (req, res) => {
    connection.query("select * from students", (err, results) => {
        if (err) {
            console.log("error in query students", err);
        } else {
            res.send(results);
        }
    });
});



router.get('/detail/:id', (req, res) => {
    const studentid = req.params.id;
    connection.query(`select * from students where id = ${studentid}`, (err, results) => {
        if (err) {
            console.log("error in query students", err);
        } else {
            console.log("student data is", results);
            res.send(results);
        }
    });
});
router.get("/search/:name", async (req, res) => {
    console.log("searching student by name");
    const name = req.params.name;
    const results = await new Promise((resolve, reject) => {
        connection.query(`select * from students where name = '${name}'`, (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });
    res.send(results);
});
// //create std

router.post('/create', async (req, res) => {
    console.log('gggggggggg')
    const name = req.body.name;
    const address = req.body.address;
    const email = req.body.email;
    const phone = req.body.phone;
    console.log("student data is", req.body);
    if (!name && !email && !address && !phone) {
        return res.status(400).send("Name ,email,phone ,and address are required");
    }
    const results = await new Promise((resolve, reject) => {
        connection.query(`insert into students (name,email,phone,address) values ('${name}','${email}',${phone},'${address}')`, (err, data) => {
            if (err) {
                console.log("error creating student", err);
                reject("something went wrong", err.message);
            } else {
                console.log("student data is", data);
                resolve(`${data.affectRows} row(s) created with id ${data.insertId}`);
            }
        });
    });
    res.send({ message: results, data: req.body });
});
// //update std
// router.put('/update/:id', async (req, res) => {
//     const studentid = req.params.id;
//     const name = req.body.name;
//     const address = req.body.address;
//     if (!name || !address|| !email || !phone) {
//         return res.status(400).send({data:"Name or address or email or phone  are required"});
//     }
//     const results = await new Promise((resolve, reject) => {
//         connection.query(`update students set name='${name}', address='${address}, email='${email}',phone ='{phone}' where id=${collegeid}`, (err, data) => {
//             if (err) {
//                 console.log("error updating college", err);
//                 reject("something went wrong", err.message);
//             } else {
//                 console.log("college data is", data);
//                 resolve(`${data.affectRows} row(s) updated`);
//             }
//         });
//     });
//     res.send({ message: results, data: req.body });
// });

// // //delete students
// // router.delete('/delete/:id', async (req, res) => {
//     const collegeid = req.params.id;
//     if (!collegeid) {
//         return res.status(400).send({data:"college id is required"});
//     }
//     const results = await new Promise((resolve, reject) => {
//         connection.query(`delete from colleges where id=${collegeid}`, (err, data) => {
//             if (err) {
//                 console.log("error deleting student", err);
//                 reject("something went wrong", err.message);
//             } else {
//                 console.log("college data is", data);
//                 resolve(`${data.affectRows} row(s) deleted with id ${collegeid} successfully`);
//             }
//         });
//     });
//     res.send({ data: results });
// });

module.exports = router;

