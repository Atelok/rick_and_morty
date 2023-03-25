import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import {Link} from "react-router-dom"

const Nav = (props) => {
    return (
        <div>
        <Link to="/about">About</Link>
        <Link to="/home">Home</Link>
        
        <div>
            <SearchBar onSearch={props.onSearch}/>
        </div>

        <div name="logout">logout</div>
        </div>
    )
}
export default Nav