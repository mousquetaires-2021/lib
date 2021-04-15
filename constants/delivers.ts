export const DELIVER_STATUS = {
	0: 'Profil à remplir',
	1: 'En attente de validation',
	2: 'Prêt à livrer'
};

export const DELIVER_STATUS_LABEL = Object.entries(DELIVER_STATUS).map((key, value) => ({
	id: value,
	label: DELIVER_STATUS[value]
}));

export const DELIVER_WAY = {
	0: 'Vélo',
	1: 'Vélo cargo',
	2: 'Vélo électrique',
	3: 'Scooter',
	4: 'Scooter électrique',
	5: 'Voiture',
	6: 'Voiture électrique',
	8: 'Je loue',
	7: 'Autre'
};

export const DELIVER_WAY_LABEL = Object.entries(DELIVER_WAY).map((key, value) => ({
	id: value,
	label: DELIVER_WAY[value]
}));

export const DELIVER_DEPARTEMENT = {
	95: "Val-d'Oise",
	78: 'Yvelines',
	91: 'Essonne',
	77: 'Seine-et-Marne',
	92: 'Hauts-de-Seine',
	75: 'Paris',
	93: 'Seine-St-Denis',
	94: 'Val-de-Marne',
	0: 'Autre'
};

export const DELIVER_DEPARTEMENT_LABEL = Object.entries(DELIVER_DEPARTEMENT).map((key, value) => ({
	id: +key[0],
	label: key[1]
}));
