import React from "react";
import { useState } from "react";
import Validation from "./Validation";
import style from "./Form.module.css"
import Boton from "./butonIngresar";


window.onload = function (){
    window.location.hash = "no-back-button";
    window.location.hash = "Again-No-back-button";
        window.onhashchange = function(){
        window.location.hash = 	"no-back-button";
        }
    }

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

//------permite cuando haya un evento en form se pueda ejecutar las funciones
//-------------------que estan dentro---//
    const handleSubmit = (event)=>{
        event.preventDefault();
        login(userData)
    }

    return(
        <div className={style.bodyForm}>
            
            <div className={style.contieneForm}>
            
            <form className={style.formulario} action="" onSubmit={handleSubmit}>

            <div className={style.form_front}>

                <label className={style.lalabel} htmlFor="username" >Email: </label>

                <input 
                className={style.inpinput}
                name="username" 
                type="text" 
                value={userData.username} 
                onChange={handleInputChange} 
                placeholder="Ingresa tu Email aqui..."/>

                <span className={style.spanError}>{errors.username}</span>
            {/* </div> */}
            <br />
            {/* <div> */}
            <label className={style.lalabel} htmlFor="password">Password: </label>

            <input 
            className={style.inpinput}
            name="password" 
            type="text" 
            value={userData.password} 
            onChange={handleInputChange} />

            <span className={style.spanError}>{errors.password}</span>
            <br />
            <Boton/>
            </div>
            

        </form>

        </div>
          {/* AQUI ES EL RICK QUE CUELGA */}
            
            {/* <div className={style.contImg}> */}
            {/* <img src="./rickColgandose.png" alt="Imagen sin fondo" />  */}
            {/* </div> */}
            
            {/* --------------- */}
    </div>  
    )
};

export default Form;
