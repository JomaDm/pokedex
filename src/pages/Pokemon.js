import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import NextPrev from '../components/NextPrev';
import './Pokemon.css';
import SearchBar from '../components/Search';
import Loader from '../components/Loader';
import Mostrados from '../components/Mostrados';

// posible url pokemon?limit=1118

const URL = 'https://pokeapi.co/api/v2/pokemon?limit=1118';
//const CHUNK_SIZE = 50;

const Pokemon = () => {
	const [pokemonInfo, setPokemonInfo] = useState([]);
	const [actualIndex, setActualIndex] = useState(0);
	const [pageArray, setPageArray] = useState(null);
	const [actualPageArray, setActualPageArray] = useState([]);
	const [chunkSize, setChunkSize] = useState(20);
	const [pageArrayLimit, setPageArrayLimit] = useState(0);

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
			let arrayDivided = divideArray(pokemonInfo, chunkSize);
			setPageArray(arrayDivided);
			setPageArrayLimit(arrayDivided.length);
		}
	}, [pokemonInfo, chunkSize]);

	useEffect(() => {
		if (pageArray !== null) {
			setActualPageArray([]);
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
				placeholder='Buscar pokemon...'
				chunkSize={chunkSize}
				setChunkSize={setChunkSize}>
				<Mostrados setChunkSize={setChunkSize} />
			</SearchBar>
			<div className='container'>
				{actualPageArray.length <= 0 ? (
					<Loader />
				) : (
					actualPageArray.map((pokemon, index) => {
						return <Card key={index} pokemon={pokemon}></Card>;
					})
				)}
			</div>
			<NextPrev
				pageArrayLimit={pageArrayLimit}
				chunkSize={chunkSize}
				actualIndex={actualIndex}
				nextList={nextList}
				prevList={prevList}
			/>
		</div>
	);
};

export default Pokemon;
