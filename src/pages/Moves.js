import React, { useState, useEffect } from 'react';
import useAxios from '../hooks/useAxios';
import MovesRow from '../components/MovesRow';
import Loader from '../components/Loader';
import Search from '../components/Search';
import './Moves.css';

const URL = 'https://pokeapi.co/api/v2/move?limit=844';

const Abilities = () => {
	const { data, loading, error } = useAxios(URL);
	const [abilitiesList, setAbilitiesList] = useState([]);
	const [actualPageArray, setActualPageArray] = useState([]);

	useEffect(() => {
		if (data) {
			setAbilitiesList(data.results);
			setActualPageArray(data.results);
		}
	}, [data]);

	if (loading) {
		return (
			<div className='loader'>
				<Loader />
			</div>
		);
	}
	if (error) {
		return (
			<div className='pokemon-container'>
				<h2>Error has ocurred...</h2>
				<Loader />
			</div>
		);
	}

	return (
		<div className='moves-container'>
			<Search
				placeholder='Buscar movimiento...'
				pokemonInfo={abilitiesList}
				setActualPageArray={setActualPageArray}
				CHUNK_SIZE={50}
			/>
			<div className='moves-list-container'>
				{actualPageArray.map((element, index) => {
					return <MovesRow key={index} name={element.name} />;
				})}
			</div>
		</div>
	);
};

export default Abilities;
