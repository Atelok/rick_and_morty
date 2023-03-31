const express = require("express");
const server = express();
const PORT = 3001;
const morgan = require("morgan");
const router = require("./Routes/index.js")

const cors = require('cors')

server.use(cors())

server.use(morgan("dev"))

server.use(express.json())

server.use("/", router)





server.listen(PORT, ()=>{
  console.log(`Server raised in port ${PORT}`);
})


























//-----------ESTE ES DE LA SEGUNDA------------//
// const http = require("http");
// const getCharById = require("./Controllers/getCharById");
// const getCharDetail = require("./Controllers/getCharDetail")
//------------------------------------//


////-----ESTE ES DE LA PRIMERA------////
// const fs = require("fs")
// const data = require("./Utils/data")
///--------------------////




// ------ ASI FUE LA SEGUNDA ------//
// const PORT = 3001;
// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     const id = req.url.split("/").slice(-1)
//     if (req.url.includes("onsearch")) {
//       getCharById(res, Number(id));
//     }
//     if (req.url.includes("detail")) {
//       getCharDetail(res, Number(id))
//     }
//   })
//   .listen(PORT, "localhost");




  ////-------ASI FUE LA PRIMERA------/////
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
