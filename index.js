const express = require("express");
const app  = express();

app.set('view engine', 'ejs');

app.get('/', function(req,res){
    var today = new Date();
    var currentDay = today.getDay();
    const dayName=["Sunday", "Monday", "Tueday", "Wednesday", "Thrusday", "Friday", "Saturday"];
    var day = dayName[currentDay];
    //var day = dayName[0];
    res.render('list', {kindOfDay:day});
});

app.listen(3000, ()=> console.log("Server started at port 3000"));