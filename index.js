const autoCompleteConfig = {
	renderOption(movie) {
		const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;
		return `
		<img src="${imgSrc}" />
		${movie.Title} (${movie.Year})
		`;
	},
	inputValue(movie) {
		return movie.Title;
	},
	async fetchData(searchTerm) {
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
	}
};

createAutoComplete({
	...autoCompleteConfig,
	root           : document.querySelector('#left-autocomplete'),
	onOptionSelect(movie) {
		document.querySelector('.tutorial').classList.add('is-hidden');
		onMovieSelect(movie, '#left-summary', 'left');
	}
});

createAutoComplete({
	...autoCompleteConfig,
	root           : document.querySelector('#right-autocomplete'),
	onOptionSelect(movie) {
		document.querySelector('.tutorial').classList.add('is-hidden');
		onMovieSelect(movie, '#right-summary', 'right');
	}
});

let leftMovie;
let rightMovie;

const onMovieSelect = async (movie, summaryTag, side) => {
	const response = await axios.get('http://www.omdbapi.com/', {
		params : {
			apikey : '5b820cab',
			i      : movie.imdbID
		}
	});
	//console.log(response.data);
	document.querySelector(summaryTag).innerHTML = movieTemplate(response.data);

	if (side === 'left') {
		leftMovie = response.data;
	} else {
		rightMovie = response.data;
	}

	if (leftMovie && rightMovie) {
		runComparison();
	}
};

const runComparison = () => {
	const leftSideStats = document.querySelectorAll('#left-summary .notification');
	const rightSideStats = document.querySelectorAll('#right-summary .notification');

	leftSideStats.forEach((leftStats, index) => {
		const rightStats = rightSideStats[index];

		const leftValue = parseInt(leftStats.dataset.value);
		const rightValue = parseInt(rightStats.dataset.value);

		if (leftValue > rightValue) {
			rightStats.classList.remove('is-primary');
			rightStats.classList.remove('is-warning');
			rightStats.classList.remove('is-danger');
			rightStats.classList.add('is-danger');

			leftStats.classList.remove('is-primary');
			leftStats.classList.remove('is-warning');
			leftStats.classList.remove('is-danger');
			leftStats.classList.add('is-primary');
		} else if (leftValue === rightValue) {
			rightStats.classList.remove('is-primary');
			rightStats.classList.remove('is-warning');
			rightStats.classList.remove('is-danger');
			rightStats.classList.add('is-warning');

			leftStats.classList.remove('is-primary');
			leftStats.classList.remove('is-warning');
			leftStats.classList.remove('is-danger');
			leftStats.classList.add('is-warning');
		} else {
			rightStats.classList.remove('is-primary');
			rightStats.classList.remove('is-warning');
			rightStats.classList.remove('is-danger');
			rightStats.classList.add('is-primary');

			leftStats.classList.remove('is-primary');
			leftStats.classList.remove('is-warning');
			leftStats.classList.remove('is-danger');
			leftStats.classList.add('is-danger');
		}
	});
};

const movieTemplate = (movieDetail) => {
	const dollars = parseInt(movieDetail.BoxOffice.replace(/\$/g, '').replace(/,/g, ''));
	const metascore = parseInt(movieDetail.Metascore);
	const imdbRating = parseFloat(movieDetail.imdbRating);
	const imdbVotes = parseInt(movieDetail.imdbVotes.replace(/,/g, ''));

	let count = 0;
	const awards = movieDetail.Awards.split(' ').reduce((acc, cur) => {
		const value = parseInt(cur);
		if (isNaN(value)) {
			return acc;
		} else {
			return acc + value;
		}
	}, 0);

	return `
	<article class="media">
		<figure class="media-left">
			<p class="image">
				<img src="${movieDetail.Poster}"/>
			</p>
		</figure>
		<div class="media-content">
			<div class="content">
				<h1>${movieDetail.Title}</h1>
				<h4>${movieDetail.Genre}</h4>
				<p>${movieDetail.Plot}</p>
			</div>
		</div>
	</article>
	<article data-value=${awards} class="notification is-primary">
		<p class="title">${movieDetail.Awards}</p>
		<p class="subtitle">Awards</p>
	</article>
	<article data-value=${dollars} class="notification is-primary">
		<p class="title">${movieDetail.BoxOffice}</p>
		<p class="subtitle">Box Office</p>
	</article>
	<article data-value=${metascore} class="notification is-primary">
		<p class="title">${movieDetail.Metascore}</p>
		<p class="subtitle">Metascore</p>
	</article>
	<article data-value=${imdbRating} class="notification is-primary">
		<p class="title">${movieDetail.imdbRating}</p>
		<p class="subtitle">IMDB Rating</p>
	</article>
	<article data-value=${imdbVotes} class="notification is-primary">
		<p class="title">${movieDetail.imdbVotes}</p>
		<p class="subtitle">IMDB Votes</p>
	</article>
	`;
};
