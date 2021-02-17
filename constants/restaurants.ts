export const RESTAURANT_STATUS = {
	0: 'En attente de validation par deliveetic',
	1: 'Validé',
	2: "Validé (besoin d'une revue par deliveetic)",
	3: 'Refusé'
};

export const RESTAURANT_STATUS_IDS = [ 0, 1, 2, 3 ];

export const RESTAURANT_FOOD_STATUS = {
	0: 'Prêt à cuisiner',
	1: 'Pause indéterminée',
	2: 'Pause pour la journée'
};

export const RESTAURANT_FOOD_STATUS_LABEL = Object.entries(RESTAURANT_FOOD_STATUS).map((key, value) => ({
	id: value,
	label: RESTAURANT_FOOD_STATUS[value]
}));
