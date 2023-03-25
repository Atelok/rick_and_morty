const http = require("http");
const getCharById = require("./Controllers/getCharById");
const getCharDetail = require("./Controllers/getCharDetail")
// const fs = require("fs")
// const data = require("./Utils/data")

const PORT = 3001;

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const id = req.url.split("/").slice(-1)
    if (req.url.includes("onsearch")) {
      getCharById(res, Number(id));
    }
    if (req.url.includes("detail")) {
      getCharDetail(res, Number(id))
    }
  })
  .listen(PORT, "localhost");

// http.createServer((req, res)=>{
//      res.setHeader('Access-Control-Allow-Origin', '*');

//     if (req.url.includes("rickandmorty/character")) {

//         let ida = req.url.split("/").slice(-1).toString()

//         const result = data.filter((character)=>{
//             return character.id == ida
//         }
//         )
//         res.writeHead(200, {"content-type":"application/json"})
//         res.end(JSON.stringify(result))
//     }

// }).listen(PORT, "localhost")
