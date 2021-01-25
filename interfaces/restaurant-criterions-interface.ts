export interface RestaurantTypeInterface {
	id: number;
	name: string;
	icon?: string;
}

export interface RestaurantCriterionsInterface {
	foodTypes: RestaurantTypeInterface[];
}
