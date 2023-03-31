import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import {Link} from "react-router-dom"
import style from "./Nav.module.css"

const Nav = (props) => {
    return (
        <div className={style.nav_container}>
        
            <div className={style.nav_links}>
            <Link to="/about">About</Link>
            <Link to="/home">Home</Link>
            </div>

            <div className={style.nav_search}>
            <SearchBar onSearch={props.onSearch}/>
            </div>

            <div className={style.nav_links}>
            <div name="logout">logout</div> 
            </div>
        
        </div>
    )
}
export default Nav