import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Filosofia from "./sections/Filosofia";
import Nosotros from "./sections/Nosotros";
import Servicios from "./sections/Servicios";
import Clientes from "./sections/Clientes";

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
    </main>
    </>
  )
}

export default App
