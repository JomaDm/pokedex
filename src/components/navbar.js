import React from 'react';
import './navbar.css';

const Navbar = () => {
	return (
		<div className="navbar">
			<h1 className="navbar-logo">Pokedex</h1>
			<ul className="navbar-list">
				<li className="navbar-item">Pokemon</li>
				<li className="navbar-item">Abilities</li>
				<li className="navbar-item">About</li>
			</ul>
		</div>
	);
};

export default Navbar;
