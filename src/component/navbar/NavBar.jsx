import { Link } from "react-router-dom"
import {NavContainer }from "./nav.style.jsx"
import logo from "/img/logo engapp2.png"
export default function NavBar(){
    return(
        <>
        <NavContainer>
            
            <div className="menuWeb">
              <img src={logo} alt="#" className="logo" />
              <Link to="/">LOGIN</Link>
              <Link to="/home">HOME</Link>
              <Link to="/sobre">SOBRE</Link>
            </div>
            <input type="text" name="" id="" />
        </NavContainer>
        

        </>
    )
}