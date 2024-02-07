import Entrada from "../inputs/Input"
import { LoginStyle } from "./login.style"
export default function Logar(){
    return(
        <LoginStyle>
            <div className="card">
              <p>LOGIN</p>
              <Entrada  place="E-MAIL:"  tipo="text"/>
              <Entrada  place="SENHA:"  tipo="password"/>
            </div>
        </LoginStyle>
    )
}