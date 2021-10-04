import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ pokemon }) => {
	const [pokemonData, setPokemonData] = useState(null);
	const name = pokemon.name;
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

	return (
		<Link className='link' to={`pokemon/${pokemon.name}`}>
			<div className='card no-select-text'>
				{pokemonData && <LazyLoadImage effect='opacity' src={pokemonData.sprites.front_default} alt={pokemon.name} />}
				<h3>{`${name.charAt(0).toUpperCase()}${name.slice(1).toLowerCase()}`}</h3>
			</div>
		</Link>
	);
};

export default Card;
