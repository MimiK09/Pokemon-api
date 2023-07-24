import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Type = (props) => {
	const params = useParams();
	const [listType, setListType] = useState([]);
	const [isLoading, setIsloading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`https://pokeapi.co/api/v2/type/${params.id}`
				);
				setListType(response.data.pokemon);
				setIsloading(false);
			} catch (error) {
				console.log(error.response); // contrairement au error.message d'express
			}
		};
		fetchData();
	}, []);

	return (
		<div className="container type-container">
			<h2>Type : {params.id}</h2>
			{isLoading ? (
				<div className="isLoading">En cours de chargement</div>
			) : (
				<div className="list-pokemons">
					{listType.map((element) => {
						const idpart = element.pokemon.url.split("/");
						const id = idpart[idpart.length - 2];

						return (
							<Link
								to={`/pokemon/${element.pokemon.name}`}
								className="link-router"
							>
								<div className="tuile-pokemons" key={element.pokemon.name}>
									<h3>{element.pokemon.name}</h3>
									<div>
										<img
											src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
											alt={element.pokemon.name}
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

export default Type;
