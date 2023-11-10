import "./Nav.scss"

import SiteLogo from "../../assets/images/site-logo.svg"

const Nav = () => {
  return (
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
            <button className="watch-btn">WATCH LIST</button>
        </div>
    </nav>
  )
}

export default Nav