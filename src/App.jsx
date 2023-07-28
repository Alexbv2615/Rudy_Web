import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Filosofia from "./sections/Filosofia";
import Nosotros from "./sections/Nosotros";
import Servicios from "./sections/Servicios";

function App() {

  return (
    <>
    <Navbar/>
    <main>
      <Home/>
      <Filosofia/>
      <Nosotros/>
      <Servicios/>
    </main>
    </>
  )
}

export default App
