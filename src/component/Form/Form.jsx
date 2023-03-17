import React from "react";
import { useState } from "react";
import Validation from "./Validation";


const Form = ({login}) => {
    
    const [userData, setUserData] = useState({ 
        username: '', 
        password: '' 
    });

    const [errors, setErrors] = useState({ 
        username: '', 
        password: '' 
    });


    const handleInputChange = (event)=>{
        setUserData({...userData, [event.target.name]: event.target.value})

        Validation({...userData, [event.target.name]: event.target.value}, errors, setErrors)
    }

//------permite cuando alla un evento en form se pueda ejecutar las funciones
//-------------------que estan dentro---//
    const handleSubmit = (event)=>{
        event.preventDefault();
        login(userData)
    }

    return(
    <>
        <form action="" onSubmit={handleSubmit}>

            <label htmlFor="username" >Email: </label>

            <input 
            name="username" 
            type="text" 
            value={userData.username} 
            onChange={handleInputChange} 
            placeholder="Ingresa tu Email aqui..."/>

            <span>{errors.username}</span>

            <br />

            <label htmlFor="password">Password: </label>

            <input 
            name="password" 
            type="text" 
            value={userData.password} 
            onChange={handleInputChange} />

            <span>{errors.password}</span>
            <br />

            <button>Ingresar {">"} </button>

        </form>
    </>)
};

export default Form;
