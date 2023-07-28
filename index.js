const express = require("express");
const app = express();
const path = require("path");
const port = process.env.port || "8088";

app.listen(port, ()=>{
    console.log(`listening on http://127.0.0.1:${port}`);
})

// Setting paths
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname,"public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const Api = require("./components/APIs");


// index page
  
app.get("/", async (req, res) => {
    res.render("index");
});


// Joke Page

app.get("/joke", async(req, res)=>{
    let data = await Api.getJoke("any");
    res.render("joke", { title: "Joke", data: data });
});


// Other Jokes
app.get("/darkJoke", async(req, res)=>{
    let data = await Api.getJoke("Dark");
    res.render("customJoke", {title: "Custom Joke", data:data});
});

app.get("/progJoke", async(req, res)=>{
    let data = await Api.getJoke("Programming");
    res.render("customJoke", {title: "Custom Joke", data:data});
});


// insult page

app.get("/insult", async(req, res)=>{
    let data = await Api.getInsult();
    res.render("insult", { title: "Insult", data: data.insult });
});


//Qoute page

app.get("/qoute", async(req, res)=>{
    let data = await Api.getQoute("today");
    res.render("qoute", { title: "qoute", data: data[0].q });
});

// Other Qoutes

app.get("/random", async(req, res)=>{
    let data = await Api.getQoute("random");
    res.render("customQoute", { title: "qoute", data: data[0].q });
});

app.get("/qouteList", async(req, res)=>{
    let data = await Api.getQoute("quotes");
    res.render("customQoute", { title: "qoute", list:true, data: data });
});


// News Page

app.get("/news", async(req, res)=>{
    let data = await Api.getNews();
    res.render("news", { title: "news", data: data.results });
});