import React, {useState} from "react"

function SearchBar(props) {
   
   const [id, setId] = useState("")

   function handleChange(events) {
      setId(events.target.value)
   }
   return (
      <div>
         <input type='text' onChange={handleChange}/>
         <button onClick={()=>props.onSearch(id)} >Agregar</button> 
      </div>
   );
}
export default SearchBar;
