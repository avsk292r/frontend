import { Link } from "react-router-dom";
import '../css/NavBar.css'

function NavBar(){
    return(
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Movie App</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favorites" className="nav-link">Favorites</Link>
            </div>
        </nav>
    )
}


export default NavBar

/*Vigtigt at bruge Link komponenten fra react-router-dom i stedet for <a> tags
Derfor står linkene med stort L i stedet for småt l*/