import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Filosofia from "./sections/Filosofia";
import Nosotros from "./sections/Nosotros";

function App() {

  return (
    <>
    <Navbar/>
    <main>
      <Home/>
      <Filosofia/>
      <Nosotros/>
    </main>
    </>
  )
}

export default App
