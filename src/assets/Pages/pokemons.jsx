import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Pokemons = (props) => {
	const [listPokemons, setListPokemons] = useState([]);
	const [isLoading, setIsloading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
				console.log("avant", response.data.results);
				const results = response.data.results;
				setListPokemons(results);
				setIsloading(false);
			} catch (error) {
				console.log(error.response); // contrairement au error.message d'express
			}
		};
		fetchData();
	}, []);

	return (
		<div className="container pokemons-container">
			<h2>Pokemons</h2>
			{isLoading ? (
				<div className="isLoading">En cours de chargement</div>
			) : (
				<div className="list-pokemons">
					{listPokemons.map((element, index) => {
						// console.log("tuile", element);
						// console.log("index", index);
						return (
							<Link to={`/pokemon/${element.name}`} className="link-router">
								<div className="tuile-pokemons" key={element.name}>
									<h3>{element.name}</h3>
									<div>
										<img
											src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
												index + 1
											}.png`}
											alt={element.name}
										/>
									</div>
								</div>
							</Link>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default Pokemons;
