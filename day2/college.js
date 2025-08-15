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
    } else {
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

router.get('/', (req, res) => {
    connection.query("select * from colleges", (err, results) => {
        if (err) {
            console.log("error in query colleges", err);
        } else {
            res.send(results);
        }
    });
});

router.get('/detail/:id', (req, res) => {
    const collegeid = req.params.id;
    connection.query(`select * from colleges where id = ${collegeid}`, (err, results) => {
        if (err) {
            console.log("error in query colleges", err);
        } else {
            console.log("college data is", results);
            res.send(results);
        }
    });
});
router.get("/search/:name", async (req, res) => {
    const name = req.params.name;
    const results = await new Promise((resolve, reject) => {
        connection.query(`select * from colleges where name = '${name}'`, (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });
    res.send(results);
});
//create college

router.post('/create', async (req, res) => {
    const name = req.body.name;
    const address = req.body.address;
    if (!name && !address) {
        return res.status(400).send("Name and address are required");
    }
    const results = await new Promise((resolve, reject) => {
        connection.query(`insert into colleges (name,address) values ('${name}','${address}')`, (err, data) => {
            if (err) {
                console.log("error creating college", err);
                reject("something went wrong", err.message);
            } else {
                console.log("college data is", data);
                resolve(`${data.affectRows} row(s) created with id ${data.insertId}`);
            }
        });
    });
    res.send({ message: results, data: req.body });
});
//update college
router.put('/update/:id', async (req, res) => {
    const collegeid = req.params.id;
    const name = req.body.name;
    const address = req.body.address;
    if (!name || !address) {
        return res.status(400).send({data:"Name or address are required"});
    }
    const results = await new Promise((resolve, reject) => {
        connection.query(`update colleges set name='${name}', address='${address}' where id=${collegeid}`, (err, data) => {
            if (err) {
                console.log("error updating college", err);
                reject("something went wrong", err.message);
            } else {
                console.log("college data is", data);
                resolve(`${data.affectRows} row(s) updated`);
            }
        });
    });
    res.send({ message: results, data: req.body });
});

//delete college
router.delete('/delete/:id', async (req, res) => {
    const collegeid = req.params.id;
    if (!collegeid) {
        return res.status(400).send({data:"college id is required"});
    }
    const results = await new Promise((resolve, reject) => {
        connection.query(`delete from colleges where id=${collegeid}`, (err, data) => {
            if (err) {
                console.log("error deleting college", err);
                reject("something went wrong", err.message);
            } else {
                console.log("college data is", data);
                resolve(`${data.affectRows} row(s) deleted with id ${collegeid} successfully`);
            }
        });
    });
    res.send({ data: results });
});

module.exports = router;

