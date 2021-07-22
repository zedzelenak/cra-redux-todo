const add = () => {
	const inputValue = document.querySelector('input#add').value;

	if(!inputValue || inputValue === '') {
		return {
			type: null,
			payload: null,
		}
	}
	
	return {
		type: 'add',
		payload: inputValue
	};
};


const remove = (text) => {
	return {
		type: 'remove',
		payload: text
	};
};


const removeAll = () => {
	return {
		type: 'removeAll',
		payload: []
	};
};

export {
	add,
	remove,
	removeAll
};