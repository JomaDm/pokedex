import React, { useState, useEffect } from 'react';
import useAxios from '../hooks/useAxios';
import MovesRow from '../components/MovesRow';

const URL = 'https://pokeapi.co/api/v2/move?limit=844';

const Abilities = () => {
	const { data, loading, error } = useAxios(URL);
	const [abilitiesList, setAbilitiesList] = useState([]);

	useEffect(() => {
		if (data) {
			setAbilitiesList(data.results);
		}
	}, [data]);

	return (
		<div>
			<h1>Moves List</h1>
			{abilitiesList.map((element, index) => {
				return <MovesRow key={index} name={element.name} />;
			})}
		</div>
	);
};

export default Abilities;
