



import { useState } from "react";

const Resolve = () => {


    const [characters, setCharacters] = useState([]);

    const onSearch = (id) => {

        fetch(`http://localhost:3001/rickandmorty/onsearch/${id}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.name) {
                    if (characters.find((character) => character.id === data.id)) {
                        return window.alert("Personaje repetido");
                    } else {
                        setCharacters((characters) => [...characters, data]);
                    }
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            });
    };

    function onClose(id) {
        setCharacters(
            characters.filter((character) => {
                return character.id !== id;
            })
        );
    }


}