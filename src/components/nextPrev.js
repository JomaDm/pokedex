import React from 'react';
import './css/nextPrev.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const NextPrev = ({ nextUrl, prevUrl, loadData }) => {
	return (
		<div className="pages">
			{prevUrl && (
				<button onClick={() => loadData(prevUrl)}>
					<FontAwesomeIcon icon={faArrowLeft} />
				</button>
			)}
			<button onClick={() => loadData(nextUrl)}>
				<FontAwesomeIcon icon={faArrowRight} />
			</button>
		</div>
	);
};

export default NextPrev;
