const getCharById = require("../Controllers/getCharById");
const getCharDetail = require("../Controllers/getCharDetail");

const { Router } = require("express");
let array = require("../Utils/favs")

const router = Router();

router.get("/rickandmorty/onsearch/:id", getCharById);
router.get("/rickandmorty/detail/:id",getCharDetail);





//  SE USA PARA SUBIR NUEVOS PERSONAJES // 
router.post("/rickandmorty/fav", (req, res)=>{
    const character= req.body; 
    array.push(character)
    res.status(200).json({success:"Listo tonto"})
})

// SE USA PARA QUE APAREZCAN TODOS LOS PERSONAJES // 
router.get("/rickandmorty/fav", (req, res)=>{
    res.status(200).json(array)
}
)

// SE USA PARA ELIMINAR UN PERSONAJE MEDIANTE ID
router.delete(`/rickandmorty/fav/:id`, (req, res)=>{
const {id}= req.params

array = array.filter((char)=> char.id != id)
res.status(200).json({success: "Eliminado, destruido, abatido"})



// if (!id) {
//     res.status(400).json({error: "No seas marciano, coloca algo"})
    
// }

// if (id) {
//     const buscadorId = array.findIndex((personaje)=> id == personaje.id)
//     if (buscadorId===-1) {
//         res.status(500).json({error: "No seas marciano, el ID es incorrecto"})
//     }
//     else{
//         array.splice(buscadorId,1)
//         res.status(200).json({success: "Eliminado, destruido, abatido"})
//     }
// }
});

module.exports = router






// router.post("/rickandmorty/fav", (req, res)=>{
//     const {id, name, species, image, gender, origin} = req.query; 
//     if (!id || !name || !species || !image || !gender || !origin) {
//         res.status(500).json({error: "Faltan datos importantes mi estimado"})
//     }
//     const newCharacter = {
//         id , 
//         name, 
//         species, 
//         image, 
//         gender,
//         origin
//     }

//     array.push(newCharacter)
//     res.status(200).json({error:"Listo tonto"})
// })