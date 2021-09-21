import axios from 'axios';
import { useState, useEffect } from 'react';

const useAxios = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		axios
			.get(url)
			.then((response) => {
				setData(response.data);
				setLoading(false);
			})
			.catch((error) => {
				setError(error);
				setLoading(false);
			});
	}, [url]);

	return { data, loading, error };
};

export default useAxios;
