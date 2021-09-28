import React from 'react';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import useAxios from '../hooks/useAxios';
import Loader from './Loader';
import MovesRow from './MovesRow';
import './PokemonInfo.css';
import { Type } from './Type';

const baseURL = 'https://pokeapi.co/api/v2/pokemon';

const PokemonInfo = () => {
	const { name } = useParams();
	let { data, error, loading } = useAxios(`${baseURL}/${name}`);
	const [imgLoaded, setImgLoaded] = useState(false);

	const onImgLoaded = () => {
		setImgLoaded(true);
	};

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
		<div className='pokemon-container'>
			<h2 className='pokemon-name'>{`${name.charAt(0).toUpperCase()}${name.slice(1).toLowerCase()}`}</h2>
			<div className='pokemon-data-container'>
				<img
					className={!imgLoaded ? 'invisible' : ''}
					onLoad={onImgLoaded}
					src={data['sprites']['other']['official-artwork']['front_default']}
					alt=''
				/>
				<div className='pokemon-data'>
					<h2>Data</h2>
					<ul>
						<li>
							<span>Height: {data['height'] / 10} m</span>
						</li>
						<li>
							<span>Weight: {data['weight'] / 10} kg</span>
						</li>
						<li>
							<div className='type-container'>
								{data.types.map((typeElement, index) => {
									return <Type key={index} type={typeElement.type.name} />;
								})}
							</div>
						</li>
					</ul>
					{/* {data.moves.map((move) => {
						console.log(move);
						return <MovesRow name={move.move.name} />;
					})} */}
				</div>
			</div>
		</div>
	);
};

export default PokemonInfo;
