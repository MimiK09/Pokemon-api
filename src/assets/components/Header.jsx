import logo from "../img/Pokemon-Logo.png";
import { Link } from "react-router-dom";
const Header = (props) => {
	return (
		<header>
			<div className="container">
				<Link to="/" className="link-router">
					<div className="logo">
						<img src={logo} alt="logo pokemon" />
					</div>
				</Link>
				<div>
					<Link to="/pokemons" className="link-router">
						<p>Pokemons</p>
					</Link>
					<Link to="/types" className="link-router">
						<p>Types</p>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
