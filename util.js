const debounce = (func, delay = 1000) => {
	let timeoutId;
	return (...args) => {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		timeoutID = setTimeout(() => {
			func.apply(null, args);
		}, delay);
		set;
	};
};
