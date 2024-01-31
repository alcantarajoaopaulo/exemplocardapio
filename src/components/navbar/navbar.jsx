import "./navbar.css";
import imgLogo from "../../assets/logo.png";
import bag from "../../assets/bag.png";

function Navbar() {
    return <div className="navbar">
        <img src={imgLogo} className="logotipo" alt="logotipo" />

        <div className="menu">
            <a href="#">Histórico</a>
            <button className="btn btn-red">
                <img src={bag} className="icon" />
                Sacola
            </button>
        </div>
    </div>
}

export default Navbar;