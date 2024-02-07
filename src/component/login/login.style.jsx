import styled from "styled-components";
import Config from "../config/Config";
export const LoginStyle = styled.div`
width:100vw;
height: ${Config.alturaCorpo}vh;
display: flex;
flex-direction: row;
align-items: center;
justify-content:center;

  .card{
    height: 50vh;
    width: 50vw;
    background-color: ${Config.cor3};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #5c5c5c;
  }

`