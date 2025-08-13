const express = require('express');
const app = express();


app.get('/html',(req,res) => {
    console.log('Hello world');
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello World from Express</h1>
</body>
</html>`);

});


//listen-port
app.listen(3000, () => {
    console.log('Express is running on port 3000');
});



