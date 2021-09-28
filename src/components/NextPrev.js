import React from 'react';
import './NextPrev.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const NextPrev = ({ pageArrayLimit, chunkSize, actualIndex, nextList, prevList }) => {
	return (
		<div className='pages'>
			{actualIndex > 0 ? (
				<button onClick={() => prevList()}>
					<FontAwesomeIcon icon={faArrowLeft} />
				</button>
			) : (
				<div></div>
			)}
			{actualIndex < pageArrayLimit - 1 ? (
				<button onClick={() => nextList()}>
					<FontAwesomeIcon icon={faArrowRight} />
				</button>
			) : (
				<div></div>
			)}
		</div>
	);
};

export default NextPrev;
