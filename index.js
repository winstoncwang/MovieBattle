const fetchData = async (searchTerm) => {
	const response = await axios.get('http://www.omdbapi.com/', {
		params : {
			apikey : '5b820cab',
			s      : searchTerm
		}
	});

	console.log(response.data);
};
