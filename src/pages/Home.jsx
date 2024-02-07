import { HomeContainer } from "./homeStyle";
import { FaCalculator } from "react-icons/fa";
import { PiGearFill } from "react-icons/pi";
import { RxDimensions } from "react-icons/rx";
import { BsRulers } from "react-icons/bs";
import { ImUserPlus } from "react-icons/im";
export default function Home(){
    return(
        <HomeContainer>
            <nav>
                <div className="icons">
                <a href="">PILAR</a>
                <a href="">VIGA</a>
                <a href="">SAPATA</a>
                 <PiGearFill/> 
                 <FaCalculator/>
                 <RxDimensions/>
                 <BsRulers/>
                 <ImUserPlus/>
                 
                </div>
              
            </nav>
        </HomeContainer>
    )
}