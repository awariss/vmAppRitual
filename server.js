const express = require('express')
const app = express()
const port = 80
const path = require('path');

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static("public"));

let finishedNames = []

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
    res.send("OK")
})

app.get("/resetNamesSecret", (req, res) => {
    finishedNames = []
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