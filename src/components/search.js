import React from 'react';
import { useState, useEffect } from 'react';
import './css/search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({
	pokemonInfo,
	actualPageArray,
	setActualPageArray,
	setSearchActive,
	CHUNK_SIZE,
}) => {
	const [inputValue, setInputValue] = useState('');
	const [focusInput, setFocusInput] = useState(false);

	const handleChangeSearch = (value) => {
		setInputValue(value.toLowerCase());
		setSearchActive(value.length > 0);
		console.log(inputValue);
	};

	const handleOnFocus = () => {
		setFocusInput(true);
	};
	const handleOnBlur = () => {
		setFocusInput(false);
	};

	useEffect(() => {
		let aux = pokemonInfo
			.filter((element) => element.name.startsWith(inputValue))
			.slice(0, CHUNK_SIZE);
		let aux2 = pokemonInfo
			.filter((element) => element.name.includes(inputValue))
			.slice(0, CHUNK_SIZE);

		setActualPageArray(Array.from(new Set(aux.concat(aux2))));
	}, [inputValue]);

	return (
		<div className="search">
			<FontAwesomeIcon
				className={'icon-search ' + (focusInput ? 'icon-search-hover' : '')}
				icon={faSearch}
			/>
			<input
				onFocus={() => handleOnFocus()}
				onBlur={() => handleOnBlur()}
				onChange={(e) => handleChangeSearch(e.target.value)}
				placeholder="Buscar Pokemon..."
				type="text"
			/>
		</div>
	);
};

export default SearchBar;
