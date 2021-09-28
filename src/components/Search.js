import React from 'react';
import { useState, useEffect } from 'react';
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({
	children,
	pokemonInfo,
	actualPageArray,
	setActualPageArray,
	placeholder,
	chunkSize,
	setChunkSize,
}) => {
	const [inputValue, setInputValue] = useState('');
	const [focusInput, setFocusInput] = useState(false);

	const handleChangeSearch = (value) => {
		setInputValue(value.toLowerCase());
		// setSearchActive(value.length > 0);
		//console.log(inputValue);
	};

	const handleOnFocus = () => {
		setFocusInput(true);
	};
	const handleOnBlur = () => {
		setFocusInput(false);
	};

	useEffect(() => {
		let aux = pokemonInfo.filter((element) => element.name.startsWith(inputValue)).slice(0, chunkSize);
		let aux2 = pokemonInfo.filter((element) => element.name.includes(inputValue)).slice(0, chunkSize);

		setActualPageArray(Array.from(new Set(aux.concat(aux2))));
	}, [inputValue, chunkSize, pokemonInfo, setActualPageArray]);

	return (
		<div>
			<div className='search'>
				<FontAwesomeIcon className={'icon-search ' + (focusInput ? 'icon-search-hover' : '')} icon={faSearch} />
				<input
					onFocus={() => handleOnFocus()}
					onBlur={() => handleOnBlur()}
					onChange={(e) => handleChangeSearch(e.target.value)}
					placeholder={placeholder}
					type='text'
				/>
			</div>
			<div className='options'>{children}</div>
		</div>
	);
};

export default SearchBar;
