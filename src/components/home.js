import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './card';
import NextPrev from './nextPrev';
import './css/home.css';
import SearchBar from './search';

// posible url pokemon?limit=1118

const URL = 'https://pokeapi.co/api/v2/pokemon?limit=1118';
const CHUNK_SIZE = 50;

const Home = () => {
	const [pokemonInfo, setPokemonInfo] = useState([]);
	const [actualIndex, setActualIndex] = useState(0);
	const [pageArray, setPageArray] = useState(null);
	const [actualPageArray, setActualPageArray] = useState([]);
	// const [searchActive, setSearchActive] = useState(false);

	const loadData = async () => {
		await axios
			.get(URL)
			.then((response) => {
				setPokemonInfo(response.data['results']);
				setActualIndex(0);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const divideArray = (originArray, sizeChunk) => {
		let arrayAux = [];
		let start = 0;
		let end = sizeChunk;
		let chunks = Math.floor(originArray.length / sizeChunk) + 1;
		for (let i = 0; i < chunks; i++) {
			arrayAux.push(originArray.slice(start, end));
			start = end;
			end = 1118 - end > sizeChunk ? end + sizeChunk : originArray.length + 1;
			//console.log(start, end);
		}
		//console.log(arrayAux);
		return arrayAux;
	};

	const nextList = () => {
		setActualIndex(actualIndex + 1);
	};

	const prevList = () => {
		setActualIndex(actualIndex - 1);
	};

	useEffect(() => {
		if (pokemonInfo.length > 0) {
			//console.log(pokemonInfo.length);
			setPageArray(divideArray(pokemonInfo, CHUNK_SIZE));
		}
	}, [pokemonInfo]);

	useEffect(() => {
		if (pageArray !== null) {
			setActualPageArray(null);
			setActualPageArray(pageArray[actualIndex]);
		}
	}, [actualIndex, pageArray]);

	useEffect(() => {
		loadData();
	}, []);

	return (
		<div>
			<SearchBar
				pokemonInfo={pokemonInfo}
				actualPageArray={actualPageArray}
				setActualPageArray={setActualPageArray}
				// setSearchActive={setSearchActive}
				CHUNK_SIZE={CHUNK_SIZE}
			/>
			<div className="container">
				{actualPageArray === null ? (
					<h3 className="loading">Loading</h3>
				) : (
					actualPageArray.map((pokemon, index) => {
						return <Card key={index} pokemon={pokemon}></Card>;
					})
				)}
			</div>
			<NextPrev
				actualIndex={actualIndex}
				nextList={nextList}
				prevList={prevList}
			/>
		</div>
	);
};

export default Home;
