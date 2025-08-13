const express = require('express');
const router = express();
//create new get route
router.get('/',(req,res) => {
    const location = req.query.location;
    const name =req.query.name;
    const country = req.query.country;
    // console.log('Hello world from about');
    res.send(`static route;<br/>from <br/> location:${location},</br> name:${name},<br/> country:${country}`);
});
//create new route with route params and query param


router.get('/user:id',(req,res) => {
   const userid = req.params.id;
   const location = req.query.location;
   
  res.send(` this is example of dynamic route Hello User ID is ${userid} and location is ${location}`);
});

router.get("/:id/name/:name/education/:educaton/address/:address/country/:country",(req,res) => {
    const id =req.params.id;
    const name = req.params.name;
    const education = req.params.educaton;
    const address = req.params.address;
    const country = req.params.country;
    res.send(`This is an example of dynamic route with query param ;hello hello ${id} ${name} ${education} ${address} ${country} `);


});
 module.exports = router;