import axios from 'axios';
import { useState, useEffect } from 'react';

const useAxios = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const abortControl = new AbortController();

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
	const retryConnetion = () => axiosGET();

	useEffect(() => {
		axiosGET();
	}, [url]);

	setTimeout(() => {
		abortControl.abort();
	}, 3000);

	return { data, loading, error, retryConnetion };
};

export default useAxios;
