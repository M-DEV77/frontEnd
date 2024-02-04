import Config from "../config/Config"
import styled from "styled-components";
export const NavContainer = styled.div`
width: 100vw;
height: ${Config.alturaNavBar}vh;
background-color: ${Config.cor1};

display: flex;
flex-direction: row;
align-items: center;

a{
    text-decoration: none;
    margin-left: 1vw;
    font-size: ${Config.alturaTexto2}vw;
    color: ${Config.cor2};

}
`