import axios from 'axios';
import { useState, useEffect } from 'react';

const useAxios = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const axiosGET = async () => {
			setLoading(true);
			try {
				const dataAxios = await axios.get(url);
				setData(dataAxios.data);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		axiosGET();
	}, [url]);

	return { data, loading, error };
};

export default useAxios;
