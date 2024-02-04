import { Link } from "react-router-dom"
import {NavContainer }from "./nav.style.jsx"
export default function NavBar(){
    return(
        <>
        <NavContainer>
            <Link to="/">LOGIN</Link>
            <Link to="/home">HOME</Link>
            <Link to="/sobre">SOBRE</Link>
        </NavContainer>
        

        </>
    )
}