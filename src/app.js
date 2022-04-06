// const exp = require("constants");
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8000;
var hbs = require('hbs');




const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");
// console.log(path.join(__dirname,"../public"));

app.set('view engine','hbs');
app.set('views', templatePath);
app.use(express.static(staticPath));
// app.use(express.static(templatePath));


// register path to partials
hbs.registerPartials(partialsPath);

app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/about",(req,res)=>{
    res.render("about");
})

app.get("/weather",(req,res)=>{
    res.render("weather");
})

app.get("*",(req,res)=>{
    res.render("404page");
})

app.listen(port,()=>{
    console.log("App listening Successfully");
})