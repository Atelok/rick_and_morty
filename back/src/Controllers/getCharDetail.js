const axios = require("axios")

const getCharDetail =(res, id)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(resp=> resp.data)
    .then(data => {
        const charact = {
            image: data.image,
            name: data.name,
            gender: data.gender,
            status:data.status,
            origin: data.origin,
            species: data.species
        }
        res.writeHead("200", {"content-type":"application/json"} )
        res.end(JSON.stringify(charact));
        })

        .catch(err => {
        res.writeHead("500", {"content-type":"text/plain"} )
        res.end(err);
        })
}

module.exports = getCharDetail