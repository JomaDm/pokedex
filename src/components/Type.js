import React from 'react';
import './Type.css';

export const Type = ({ type }) => {
	console.log(type);
	return <span className={'type ' + type}>{type.toUpperCase()}</span>;
};
