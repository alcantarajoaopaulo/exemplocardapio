import "./navbar.css";
import imgLogo from "../../assets/logo.png";
import bag from "../../assets/bolsa.png";

function Navbar() {
    return <div className="navbar">
        <img src={imgLogo} className="logotipo" alt="logotipo" />

        <div className="menu">
            <a href="http://localhost:3000/">Histórico</a>
            <button className="btn btn-red">
                <img src={bag} className="icon" alt="icone" />
                Sacola
            </button>
        </div>
    </div>
}

export default Navbar;