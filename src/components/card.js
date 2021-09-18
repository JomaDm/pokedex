import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './Card.css';

const Card = ({ pokemon }) => {
	const [pokemonData, setPokemonData] = useState(null);
	useEffect(() => {
		axios
			.get(pokemon.url)
			.then((response) => {
				setPokemonData(response.data);
				//console.log(response.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [pokemon.url]);

	const p = (name) => {
		alert(name);
	};

	return (
		<div onClick={() => p(pokemon.name)} className='card no-select-text'>
			{pokemonData && <LazyLoadImage effect='opacity' src={pokemonData.sprites.front_default} alt={pokemon.name} />}
			<h3>{pokemon.name}</h3>
		</div>
	);
};

export default Card;
