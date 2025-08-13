const express = require('express');
const app = express();
const profileRouter = require('./profile'); 
const userRouter = require('./user'); //importing the user route file
//importing the route file

app.get('/',(req,res) => {
    console.log('Hello world');
    res.send('hello world')


});
app.use("/profile",profileRouter);
app.use('/user',userRouter)
//listen-port
app.listen(4000, () => {
    console.log('Express is running on port 4000');
});



