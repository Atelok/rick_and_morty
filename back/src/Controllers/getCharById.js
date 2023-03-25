const axios = require("axios");

const getCharById = (res, id) => {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((resp) => resp.data)
    .then((data) => {
      const charact = {
        id: data.id,
        image: data.image,
        name: data.name,
        gender: data.gender,
        species: data.species,
      };
      console.log(charact);
      res.writeHead("200", { "content-type": "application/json" });
      res.end(JSON.stringify(charact));
    })
    .catch((err) => {
      res.writeHead("500", { "content-type": "text/plain" });
      res.end(err);
    });
};

module.exports = getCharById;
