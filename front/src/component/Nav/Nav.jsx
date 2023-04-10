import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink as NavLinkReactRouter, Location } from "react-router-dom";
import style from "./Nav.module.css";
import handleLogout from "../Extra/logout";


// import { useNavigate } from "react-router-dom";
// import handleLogout from "../Extra/logout";
// import { useDispatch } from "react-redux";
// import { Logout } from "../../redux/action";
// import { useAccess } from "../Extra/logoutPedro";

const Navs = (props) => {


    // const dispatch = useDispatch();
    // useAccess();


    // const navigate = useNavigate();
    // const disconnectLogout = () => {
    //     // Reemplaza la entrada actual en el historial del navegador con una nueva entrada
    //     // history.replaceState(null, null, window.location.href);
    //     // // Redirige al usuario a la página de inicio de sesión
    //     // window.location.replace('/ruta-de-inicio');

    // };


    //!Este codigo le daremos al boton para refrescar la pagina
    // function handleClick() {
    //     window.location.reload();
    // }
    //--------------------------------------------//



    //! este codigo es para que el estado local convertirlo a False
    // const logout = () => {
    //     dispatch(Logout(false))
    // }
    //-------------------------------------------------------




    //---------Contruimos una función que dentro estamos modificando se podria decir  el NavLink para que cada vez que usemos Navlink se pueda dar el efecto correspiendete por el css.module que le estamos dando----//
    const NavLink = ({ to, children, ...props }) => {
        return (
            <NavLinkReactRouter
                {...props}
                className={({ isActive }) => (isActive ? style.is_active : "")}
                to={to}>

                {children}

            </NavLinkReactRouter>
        );
    };
    //-------------------------------------------------//

    return (
        <div className={style.nav_container}>
            <div className={style.div_ahf}>
                <div className={style.nav_links}>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/favorites">Favorites</NavLink>
                </div>
            </div>

            <div className={style.nav_search}>
                <SearchBar onSearch={props.onSearch} />
            </div>

            <div className={style.nav_links}>
                {/* {onClick={logout}} */}
                <NavLink to="/"  onClick={handleLogout}>
                    logout
                </NavLink>

            </div>
        </div>
    );
};
export default Navs;
