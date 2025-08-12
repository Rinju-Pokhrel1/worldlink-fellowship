const express = require('express');
const app = express();


app.get('/',(req,res) => {
    console.log('Hello world');
    res.send('Hello world from Express');

});

//listen-port
app.listen(3000, () => {
    console.log('Express is running on port 3000');
});



