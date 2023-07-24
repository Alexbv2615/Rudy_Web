import { FiMapPin } from "react-icons/fi"
import { BsWhatsapp } from "react-icons/bs"

function Navbar() {
  return (
    <nav className="nav">
        <img className="nav-logo" src="/image/logo_rudy.png"/>
        <div className="nav-ubi">
            <FiMapPin className="nav-ubi-icon"/>
            <span className="nav-ubi-text">Psj. Los Ruiseñores Asoc. Las Alondras Mz. A Lt. 06 - Ate</span>
        </div>
        <div className="nav-whatsapp">
            <BsWhatsapp className="nav-whatsapp-icon"/>
            <span className="nav-whatsapp-text">+51 968 342 429</span>
        </div>
        <ul className="nav-ul">
            <li>Nosotros</li>
            <li>Servicios</li>
            <li>Contactar</li>
        </ul>
    </nav>
  )
}

export default Navbar
