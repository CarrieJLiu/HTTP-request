import express from "express";

const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`server running on port ${port}.`);
})

app.get("/", (req, res) => {
    res.send("<h1>Hello<h1>");
})

app.get("/about", (req, res) => {
    res.send("<h1>Carrie<h1>");
})

app.get("/about/contact", (req, res) => {
    res.send("<h1>12345677768<h1>");
})