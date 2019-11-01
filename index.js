const fetchData = async (searchTerm) => {
	const response = await axios.get('http://www.omdbapi.com/', {
		params : {
			apikey : '5b820cab',
			s      : searchTerm
		}
	});

	if (response.data.Error) {
		return [];
	}
	return response.data.Search;
};

const root = document.querySelector('.autocomplete');
root.innerHTML = `
	<label><b>Search For a Movie</b></label>
    <input class="input"/>
	<div class="dropdown">
        <div class="dropdown-menu">
          <div class="dropdown-content result">
          </div>
        </div>
      </div>
	<div id="target"></div>
`;

const input = document.querySelector('.input');
const dropdown = document.querySelector('.dropdown');
const resultsWrapper = document.querySelector('.result');

const onInput = async (event) => {
	const movies = await fetchData(event.target.value);

	resultsWrapper.innerHTML = '';
	for (let movie of movies) {
		const option = document.createElement('a');
		const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;

		option.classList.add('dropdown-item');
		option.innerHTML = `
		<img src="${imgSrc}" />
		${movie.Title}
		`;

		resultsWrapper.appendChild(option);
	}
	dropdown.classList.add('is-active');
};

input.addEventListener('input', debounce(onInput, 500));
