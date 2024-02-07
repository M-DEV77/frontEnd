import { InputStyle } from "./input.style"
export default function Entrada(props){
    
    return(
        
        <InputStyle >
            <p>{props.place}</p>
            <input className="inp" type={props.tipo}  placeholder={props.place}/>
        </InputStyle >
       
    )
}