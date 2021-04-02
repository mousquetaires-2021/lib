export const transformToFloat = (item) => {
	if (typeof item === 'string') {
		return parseFloat(item.replace(',', '.'));
	}

	return item;
};
