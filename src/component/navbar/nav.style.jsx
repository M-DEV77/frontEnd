import Config from "../config/Config"
import styled from "styled-components";
export const NavContainer = styled.div`
width: 100vw;
height: ${Config.alturaNavBar}vh;
background-color: ${Config.cor1};

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
.menuWeb{
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: space-between;  
}
a{
    text-decoration: none;
    margin-left: 1vw;
    font-size: ${Config.alturaTexto2}vw;
    color: ${Config.cor2};

}
.logo{
    height:${Config.alturaNavBar}vh;
    margin-left: 0.5vw;
}
input{
    height:6vh ;
    width: 20vw;
    font-size: 2vw;
    border-style: none;
    margin-right: 0.8vw;
}
`