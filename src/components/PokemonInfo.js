import React from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import useAxios from '../hooks/useAxios';
import Loader from './Loader';
import './PokemonInfo.css';

const baseURL = 'https://pokeapi.co/api/v2/pokemon';

const PokemonInfo = () => {
	const { name } = useParams();
	const { data, error, loading } = useAxios(`${baseURL}/${name}`);
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
				<h1>Cargando...</h1>
			</div>
		);
	}

	return (
		<div className='pokemon-container'>
			<h2 className='pokemon-name'>{name}</h2>
			<div className='pokemon-data-container'>
				<img
					className={!imgLoaded && 'invisible'}
					onLoad={onImgLoaded}
					src={data['sprites']['other']['official-artwork']['front_default']}
					alt=''
				/>
				<div className='pokemon-data'>
					<h2>Data</h2>
					<ul>
						<li>
							<span>Height: {data['height']} m</span>
						</li>
						<li>
							<span>Weight: {data['weight']} kg</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default PokemonInfo;
