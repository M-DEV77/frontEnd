import { Outlet } from "react-router-dom";
import NavBar from './component/navbar/NavBar';
import Footer from './component/footer/Footer';
import { Container } from "./app.style";
export default function App() {
  return (
    <Container>
      <NavBar/>
        <div className="main">
          <Outlet />
        </div> 
      <Footer/>
    </Container>
  )
}

