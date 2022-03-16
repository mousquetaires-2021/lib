export function shuffle(a) {
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[ a[i], a[j] ] = [ a[j], a[i] ];
	}
	return a;
}

export const QUANTITY_ARRAY = [];
for(let i = 0; i <= 20; i++) {
	QUANTITY_ARRAY.push(i);
}