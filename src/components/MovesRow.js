import React from 'react';
import './MovesRow.css';

const AbilitieRow = ({ name, url }) => {
	return (
		<div className='row'>
			<p>{name}</p>
		</div>
	);
};

export default AbilitieRow;
