const express = require('express');
const router = express();
// //create new get route
// router.get('/user',(req,res) => {
//     const location = req.query.location;
//     const name =req.query.name;
//     const country = req.query.country;
//     // console.log('Hello world from about');
//     res.send(`static route;<br/>from <br/> location:${location},</br> name:${name},<br/> country:${country}`);
// });
// //create new route with route params and query param
// router.get('/:id',(req,res) => {
//    const userid = req.params.id;
//    const location = req.query.location;
   
//   res.send(` example of dynamic route Hello User ID is ${userid} and location is ${location}`);
// });
router.get(`/try-catch`, (req, res) => {
    try {

        const data  = fs.readFileSync(`${__dirname}/data.json`, 'utf-8');
        const jsonData = JSON.parse(data);
        res.json(jsonData);
    } catch (error) {
       console.log('Error reading file:', error);
        res.status(500).send('error reading file');
    }
});
 module.exports = router;