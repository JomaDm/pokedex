import React from 'react';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import useAxios from '../hooks/useAxios';
import Loader from './Loader';
import MovesRow from './MovesRow';
import './PokemonInfo.css';
import { Type } from './Type';
import { Radar } from 'react-chartjs-2';

const baseURL = 'https://pokeapi.co/api/v2/pokemon';
const pokemonColors = {
	grass: '#73c235',
	poison: '#7a62e5',
	normal: '#c5c0b7',
	flying: '#5d74d4',
	fighting: '#6d2812',
	ground: '#b39236',
	rock: '#9e863d',
	bug: '#89970e',
	steel: '#8e8e9f',
	fire: '#c72100',
	water: '#0b66c1',
	electric: '#e79202',
	psychic: '#df3066',
	ice: '#6dd3f5',
	dragon: '#775ee1',
	dark: '#4c382b',
	fairy: '#e591e5',
	unknown: 'white',
	shadow: '#242424',
};

const PokemonInfo = () => {
	const { name } = useParams();
	let { data, error, loading } = useAxios(`${baseURL}/${name}`);
	const [flavorText, setFlavorText] = useState('');
	const [imgLoaded, setImgLoaded] = useState(false);

	useEffect(() => {
		if (data) {
			const detailsAxios = async () => {
				const url = data['species']['url'];
				const content = await axios.get(url);
				setFlavorText(
					content.data['flavor_text_entries'].filter((element) => element['language']['name'] === 'es')[0][
						'flavor_text'
					],
				);
			};
			detailsAxios();
		}
	}, [data]);

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
			<h2 className='pokemon-name'>{`${name.charAt(0).toUpperCase()}${name.slice(1).toLowerCase()} #${data['id']}`}</h2>
			<div className='pokemon-data-container'>
				<img
					className={!imgLoaded ? 'invisible' : ''}
					onLoad={onImgLoaded}
					src={data['sprites']['other']['official-artwork']['front_default']}
					alt=''
				/>
				<div className='pokemon-data'>
					<Radar
						data={{
							labels: ['hp', 'attack', 'defense', 'special-attack', 'special-defense', 'speed'],
							datasets: [{ label: 'Stats', data: data['stats'].map((element) => element['base_stat']) }],
						}}
						width={500}
						height={300}
						options={{
							maintainAspectRatio: true,
							backgroundColor: pokemonColors[data['types'][0]['type']['name']] + '50',
							borderColor: pokemonColors[data['types'][0]['type']['name']] + '20',
							responsive: false,
						}}
					/>
					<h2>Data</h2>
					<ul>
						<li>
							<span>{flavorText}</span>
						</li>
						<li>
							<span>Height: {data['height'] / 10} m</span>
						</li>
						<li>
							<span>Weight: {data['weight'] / 10} kg</span>
						</li>
						<li>
							<div className='type-container'>
								{data.types.map((typeElement) => {
									return <Type key={JSON.stringify(typeElement)} type={typeElement.type.name} />;
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
			<div className='pokemon-evo'>
				<h3>Evolutions</h3>
			</div>
		</div>
	);
};

export default PokemonInfo;
