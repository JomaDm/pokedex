import React from 'react';
import './Mostrados.css';

const Mostrar = ({ setChunkSize }) => {
	return (
		<div className='cantidad-mostrada'>
			<label htmlFor='chunk-size'>Mostrados: </label>
			<select
				value='20'
				name='chunk-size'
				onChange={(evnt) => setChunkSize(parseInt(evnt.target.value))}
				id='chunk-size'>
				<option value='20'>20</option>
				<option value='50'>50</option>
				<option value='100'>100</option>
				<option value='200'>200</option>
				<option value='500'>500</option>
			</select>
		</div>
	);
};

export default Mostrar;
