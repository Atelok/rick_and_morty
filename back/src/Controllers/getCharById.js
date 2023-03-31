const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";
// const express = require("express")

//:id
const getCharById = (req, res) => {
  const {id} = req.params;


axios
.get(`${URL}${id}`)

.then((resp) => {
    const {id, name, species, image, gender} = resp.data;
    res.status(200).json({id, name, species, image, gender})
  })
.catch((error)=>{
  res.status(500).json({error: error.message})
})
};

module.exports = getCharById;





// axios
// .get(`${URL}:id`)
// .then((resp) => resp.data)
// .then((data) => data.id)
// .then((id) => {
//   if (id === params.id) {
//     res()
//   }
// });














//----------AQUI SE TRABAJÓ CON AXIOS-----------//
// const axios = require("axios");

// const getCharById = (res, id) => {
//   axios
//     .get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((resp) => resp.data)
//     .then((data) => {
//       const charact = {
//         id: data.id,
//         image: data.image,
//         name: data.name,
//         gender: data.gender,
//         species: data.species,
//       };
//       console.log(charact);
//       res.writeHead("200", { "content-type": "application/json" });
//       res.end(JSON.stringify(charact));
//     })
//     .catch((err) => {
//       res.writeHead("500", { "content-type": "text/plain" });
//       res.end(err);
//     });
// };

// module.exports = getCharById;
//--------------------------------------//
