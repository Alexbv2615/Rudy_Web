import { FiMapPin } from "react-icons/fi"
import { BsWhatsapp } from "react-icons/bs"
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi"
import { CgClose } from "react-icons/cg"

function Navbar() {

  //menu responsive
  const [menu, setMenu] = useState(true);

  const toggleMenu = () => {
    menu ? setMenu(false) : setMenu(true);
  };

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
        <div className="responsive">
          {
            menu ?
            <GiHamburgerMenu onClick={toggleMenu} className="responsive-menu"/>
            :
            <CgClose onClick={toggleMenu} className="responsive-menu"/>
          }
      </div>
      {
        !menu && 
        <div className="menu">
          <ul className="ul">
            <li>Nosotros</li>
            <li>Servicios</li>
            <li>Contactar</li>
          </ul>
        </div>
      }
    </nav>
  )
}

export default Navbar
