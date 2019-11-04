const createAutoComplete = ({ root, renderOption, onOptionSelect }) => {
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

	const input = root.querySelector('.input');
	const dropdown = root.querySelector('.dropdown');
	const resultsWrapper = root.querySelector('.result');

	const onInput = async (event) => {
		const movies = await fetchData(event.target.value);

		if (!movies.length) {
			dropdown.classList.remove('is-active');
			return;
		}

		resultsWrapper.innerHTML = '';
		for (let movie of movies) {
			const option = document.createElement('a');

			option.classList.add('dropdown-item');
			option.innerHTML = renderOption(movie);

			option.addEventListener('click', () => {
				dropdown.classList.remove('is-active');
				input.value = movie.Title; // this is added when each anchor is created. each anchor has eventlistener
				onOptionSelect(movie);
			});

			resultsWrapper.appendChild(option);
		}
		dropdown.classList.add('is-active');
	};

	input.addEventListener('input', debounce(onInput, 500));

	document.addEventListener('click', (event) => {
		if (!root.contains(event.target)) {
			dropdown.classList.remove('is-active');
		}
	});
};
