export const DELIVER_STATUS = {
	0: 'Profil à remplir',
	1: 'En attente de validation',
	2: 'Prêt à livrer'
};

export const DELIVER_STATUS_LABEL = Object.entries(DELIVER_STATUS).map((key, value) => ({
	id: value,
	label: DELIVER_STATUS[value]
}));
