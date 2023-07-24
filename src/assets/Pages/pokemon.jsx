import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Pokemon = (props) => {
	const [data, setData] = useState();
	const [isLoading, setIsloading] = useState(true);
	const params = useParams();
	console.log("param", params);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`https://pokeapi.co/api/v2/pokemon/${params.name}`
				);
				console.log("avant", response.data);
				setData(response.data);
				setIsloading(false);
			} catch (error) {
				console.log(error.response); // contrairement au error.message d'express
			}
		};
		fetchData();
	}, []);

	const getImage = (string) => {
		console.log("string", string);
		const idpart = string.split("/");
		console.log("idpart", idpart);
		const id = idpart[idpart.length - 2];
		console.log("id", id);
		const finalUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
		return finalUrl;
	};

	return (
		<div className="container pokemons-container">
			<h2>Pokemon</h2>
			{isLoading ? (
				<div className="isLoading">En cours de chargement</div>
			) : (
				<div>
					<div className="tuile-pokemons">
						<h3>{data.forms[0].name}</h3>
						<div>
							<img src={getImage(data.forms[0].url)} alt={data.forms[0].name} />
						</div>
					</div>
					<div className="list-types-pokemon">
						{data.types.map((element) => {
							return (
								<Link to={`/type/${element.type.name}`} className="link-router">
									<p key={element.type.name} className="tag-types">{element.type.name}</p>
								</Link>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
};

export default Pokemon;
