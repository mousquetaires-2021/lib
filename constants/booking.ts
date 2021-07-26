export const BOOKING_STATUS = {
	0: 'À confirmer',
	1: 'confirmé',
	2: 'Présent',
	3: "N'est pas venu",
	4: 'Refusé'
};

export const BOOKING_STATUS_LABEL = Object.entries(BOOKING_STATUS).map((key, value) => ({
	id: value,
	label: BOOKING_STATUS[value]
}));
