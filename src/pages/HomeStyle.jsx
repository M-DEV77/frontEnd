import styled from "styled-components";
export const HomeContainer = styled.div`
height: 86vh;
width: 100vw;
color: #555555;
background-color: #464646cf;
nav{
    height: 6vh;
    background-color: #e6e6e6;
    display: flex;
    align-items: center;
    font-size: 2vw;
    justify-content: end;
}
.icons{
  width: 40vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
a{
    text-decoration: none;
    cursor: pointer;
    font-size: 1vw;
    font-weight: 800;
    color: #555555;
}

`