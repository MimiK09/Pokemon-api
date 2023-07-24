import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Types = (props) => {
	const [listTypes, setListTypes] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("https://pokeapi.co/api/v2/type");
				const results = response.data.results;
				setListTypes(results);
			} catch (error) {
				console.log(error.response); // contrairement au error.message d'express
			}
		};
		fetchData();
	}, []);

	return (
		<div className="container types-container">
			<h2>Types</h2>
			<div className="list-types">
				{listTypes.map((element) => {
					return (
						<Link to={`/type/${element.name}`} className="link-router">
							<p className="tag-types" key={element.name}>
								{element.name}
							</p>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Types;
