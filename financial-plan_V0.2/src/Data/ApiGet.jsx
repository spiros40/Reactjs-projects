import axios from 'axios';
import { useState, useEffect } from 'react';

export default function ApiGet() {
	const [response, setResponse] = useState(null);
	const fetchQuotes = async () => {
		try {
			const res = await axios.get(`https://famous-quotes4.p.rapidapi.com/random`, {
				headers: {
					'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com',
					'x-rapidapi-key': "API_KEY",
				},
				params: { category: 'all', count: '1' },
			});
			setResponse(res.data);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		// Trigger the API Call
		fetchQuotes();
	}, []);
	return (
		<div>
			{
				// If the response is not null, display the quote.
				response && <span>{response.text}</span>
			}
		</div>
	);
}