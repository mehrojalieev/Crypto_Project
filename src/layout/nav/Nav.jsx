import "./Nav.scss"
import { Container } from "../../utils/Utils"
import SiteLogo from "../../assets/images/site-logo.svg"
import { useState } from "react"

const Nav = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleSidebar = () => {
        setIsOpen(!isOpen)
    }
  return (
  <div className="nav">
     <Container>
     <nav>
        <div className="nav__logo">
            <img src={SiteLogo} alt="Logo of Site" width={170} height={25} />
            <h1 className="seo__title">CRYPTOFOLIO</h1>
        </div>
        <div className="nav__menu">
            <select>
                <option value="usd">USD</option>
                <option value="euro">EURO</option>
                <option value="rubl">RUBL</option>
            </select>
            <button handleSidebar={handleSidebar} isOpen={isOpen} setIsOpen={setIsOpen} onClick={handleSidebar} className="watch-btn">WATCH LIST</button>
        </div>
    </nav>
   </Container>

   {/* ASIDE */}
   <aside style={isOpen ? {display: "block"} : {display: "none"} }>  </aside>
    
  </div>
  )
}

export default Nav