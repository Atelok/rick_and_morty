const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";




const getCharDetail = (req, res) => {
    const {id} = req.params;
  

  axios
  .get(`${URL}${id}`)
  .then((resp) => {
      const {id, name, species, image, gender,origin} = resp.data
      res.status(200).json(
       { id,
        name,
        species,
        image,
        gender,
        origin}
    )})
  .catch((error)=>res.status(500).json({error: error.message}) )
  };

  module.exports = getCharDetail





// const axios = require("axios")

// const getCharDetail =(res, id)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(resp=> resp.data)
//     .then(data => {
//         const charact = {
//             image: data.image,
//             name: data.name,
//             gender: data.gender,
//             status:data.status,
//             origin: data.origin,
//             species: data.species
//         }
//         res.writeHead("200", {"content-type":"application/json"} )
//         res.end(JSON.stringify(charact));
//         })

//         .catch(err => {
//         res.writeHead("500", {"content-type":"text/plain"} )
//         res.end(err);
//         })
// }

// module.exports = getCharDetail