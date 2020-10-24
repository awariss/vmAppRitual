const express = require('express')
const app = express()
const port = 80
const path = require('path');

const LocalStorage = require("node-localstorage").LocalStorage
const localStorage = new LocalStorage("./data")


app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static("public"));

let finishedNames = JSON.parse(localStorage.getItem("names")) || [];

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get("/finished", (req, res) => {
    const name = req.query.name
    if (typeof name === "undefined") {
        console.error("Name not set in finished request")
        return
    }
    console.log("'"+ name +"' has finished.")
    finishedNames.push(name)
    localStorage.setItem("names", JSON.stringify(finishedNames))
    res.send(JSON.stringify(finishedNames))
})

app.get("/getNames", (req, res) => {
    res.send(JSON.stringify(finishedNames))
})


app.get("/removeName", (req, res) => {
    const name = req.query.name
    if (typeof name === "undefined") {
        console.error("Name not set in remove request")
        return
    }
    removeName(name)
    localStorage.setItem("names", JSON.stringify(finishedNames))
    res.send("OK")
})

app.get("/resetNamesSecret", (req, res) => {
    finishedNames = []
    localStorage.setItem("names", JSON.stringify(finishedNames))
    res.send("OK")
})

app.listen(port, () => {
    console.log("Server is running on port: " + port)
})


function removeName(name) {
    const i = finishedNames.indexOf(name)
    if (i >= 0) {
        finishedNames.splice(i, 1)
    }
}