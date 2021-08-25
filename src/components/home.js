import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './card';
import NextPrev from './nextPrev';
import './css/home.css';

// posible url pokemon?limit=1118

const Home = () => {
	const [pokemonInfo, setPokemonInfo] = useState([]);
	const [nextUrl, setNextUrl] = useState(
		'https://pokeapi.co/api/v2/pokemon?limit=25&offset=0'
	);
	const [prevUrl, setPrevUrl] = useState(null);

	const loadData = (url) => {
		axios
			.get(url)
			.then((response) => {
				setPokemonInfo(response.data['results']);
				setNextUrl(response.data['next']);
				setPrevUrl(response.data['previous']);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	useEffect(() => {
		loadData(nextUrl);
	}, []);

	return (
		<div>
			<div className="container">
				{pokemonInfo.map((pokemon, index) => {
					return <Card key={index} pokemon={pokemon}></Card>;
				})}
			</div>
			<NextPrev nextUrl={nextUrl} prevUrl={prevUrl} loadData={loadData} />
		</div>
	);
};

export default Home;
