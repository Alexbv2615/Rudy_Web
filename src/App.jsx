import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Filosofia from "./sections/Filosofia";
import Nosotros from "./sections/Nosotros";
import Servicios from "./sections/Servicios";
import Clientes from "./sections/Clientes";
import ServiciosInfo from "./sections/ServiciosInfo";

function App() {

  return (
    <>
    <Navbar/>
    <main>
      <Home/>
      <Filosofia/>
      <Nosotros/>
      <Servicios/>
      <Clientes/>
      <ServiciosInfo/>
    </main>
    </>
  )
}

export default App
