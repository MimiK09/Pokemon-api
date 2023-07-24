import logo from "../img/Pokemon-Logo.png";
import { Link } from "react-router-dom";
const Header = (props) => {
	return (
		<footer>
			<div className="container">
				<p>
					Made By <a href="https://github.com/MimiK09">MimiK09</a> with <span>ReactJS</span>
				</p>
			</div>
		</footer>
	);
};

export default Header;
