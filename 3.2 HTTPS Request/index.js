import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    res.send("<h1>hello yes</h1>");
})

app.get("/contact", (req, res)=>{
    res.send("<h1>123456</h1>");
})

app.get("/about", (req, res)=>{
    res.send("<h1>shariq</h1>");
})

app.listen(port, () =>{
    console.log(`server has started ${port}`);
})