import { InputStyle } from "./input.style"
export default function Entrada(tipo,valor){
    
    return(
        
        <InputStyle >
           <input type='text' placeholder={valor}  />
        </InputStyle >
       
    )
}