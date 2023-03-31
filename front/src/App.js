import React, { useState, useEffect } from "react";
import Cards from "./component/Cards/Cards";
import Nav from "./component/Nav/Nav";
import { Routes, Route } from "react-router-dom";
import About from "./component/About/About";
import Detail from "./component/Detail/Detail";
import Form from "./component/Form/Form";
import { useNavigate } from "react-router-dom";
//import SearchBar from './component/SearchBar/SearchBar'

//<SearchBar
//  onSearch={(characterID) => window.alert(characterID)}
///>

function App() {
  //!hooks
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const username = "diego135tc@gmail.com";
  const password = "Henry123";

  const navigate = useNavigate();

  const login = (userData) => {
    if (username === userData.username && password === userData.password) {
      setAccess(true);
      navigate("/home");
    }
    return "La informacion es incorrecta";
  };

  //useEffects es un hook

  useEffect(() => {
    !access && navigate("/");
  }, [access]);





  
  const onSearch = (id) => {
    //--------------API DE HENRY ----------------//
    // const URL_BASE = "https://be-a-rym.up.railway.app/api";
    // const KEY = "feff61605f36.66e147596f55cfc88223";
    // fetch(`${URL_BASE}/character/${id}/?key=${KEY}`)
    //     .then((response) => response.json())
    //     .then((data) => {
    //         if (data.name)
    //             if (characters.find((char) => char.id === data.id)) {
    //                 return alert("Personaje repetido");
    //             }else{
    //             setCharacters((oldChars) => [...oldChars, data]);
    //         } else {
    //             alert("No hay personajes con ese ID");
    //         }
    //     });
    //---------------------------------------------//

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

  return (
    <div className="App" style={{ padding: "25px" }}>
      <Nav onSearch={onSearch} />

      <hr />
      <Routes>
        <Route exact path="/" element={<Form login={login} />} />
        <Route exact path="/about" element={<About />} />

        <Route exact path="/detail/:detailId" element={<Detail />} />

        <Route
          exact
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
      </Routes>
    </div>
  );
}

export default App;
