import React, {useState} from "react"
import style from "./SearchBar.module.css"

function SearchBar(props) {
   
   const [id, setId] = useState("")

   function handleChange(events) {
      setId(events.target.value)
   }

   function randomCharacter() {
      const mate = Math.floor(Math.random()*826)
      props.onSearch(mate)
   }

   return (
      <div className={style.div_general_search}>
         <button onClick={randomCharacter} className={style.button}>Random</button>

            <div className={style.input_group}>

         <input 
         required="" 
         autocomplete="off" 
         name="text" 
         type="text"
         className={style.input}  
         onChange={handleChange} 
         value={id}/>
         <label className={style.user_label}>Ingresa un ID</label>

            </div>

         {id?<button className={style.button} onClick={()=>{if (id) {props.onSearch(id);setId("")}}}id="myBoton">Agregar</button>: <button className={style.button2} onClick={()=>{if (id) {props.onSearch(id);setId("")}}}id="myBoton" disabled>Agregar</button>}
      </div>
   );
}
export default SearchBar;
