import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	return (
		<div className='navbar'>
			<h1 className='navbar-logo'>
				<Link to='/'>Pokedex</Link>
			</h1>
			<ul className='navbar-list'>
				<li className='navbar-item'>
					<Link to='/pokemon'>Pokemon</Link>
				</li>
				<li className='navbar-item'>
					<Link to='moves'>Abilities</Link>
				</li>
				<li className='navbar-item'>
					<Link to='/about'>About</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
