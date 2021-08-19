import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
	const [links, setLinks] = useState({});

	useEffect(() => {
		axios
			.get('https://pokeapi.co/api/v2/')
			.then((response) => {
				console.log(response.data);
				setLinks(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	});

	return (
		<div className="App">
			{Object.keys(links).map((keyLink, index) => {
				return (
					<p key={index}>
						{keyLink}: {links[keyLink]}
					</p>
				);
			})}
		</div>
	);
}

export default App;
