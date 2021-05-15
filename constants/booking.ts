export const BOOKING_STATUS = {
	0: 'À confirmer',
	1: 'Présent',
	2: "N'est pas venu",
	3: 'Refuser'
};

export const BOOKING_STATUS_LABEL = Object.entries(BOOKING_STATUS).map((key, value) => ({
	id: value,
	label: BOOKING_STATUS[value]
}));
