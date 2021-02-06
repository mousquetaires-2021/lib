export interface RestaurantInferface {
	id?: number;
	name?: string;
	photo?: string;
	status?: string;
	siret?: string;
	email?: string;
	phone?: string;
	rib?: string;
	delivery_address_number?: string;
	delivery_address_street_name?: string;
	delivery_address_postal_code?: string;
	delivery_address_city_name?: string;
	delivery_longitude?: string;
	delivery_latitude?: string;
	delivery_google_place_id?: string;
	head_office_address_number?: string;
	head_office_address_street_name?: string;
	head_office_address_postal_code?: string;
	head_office_address_city_name?: string;
	head_office_longitude?: string;
	head_office_latitude?: string;
	head_office_google_place_id?: string;
	food_types?: FoodTypeInterface[];
	average_evaluation?: number;
	average_pricing?: number;
	type?: string;
}

export interface FoodTypeInterface {
	id?: number;
	name?: string;
	rank?: number;
	restaurant_id?: number;
	foods?: FoodInterface[];
	countProducts?: number;
}

export interface FoodInterface {
	id?: number;
	name?: string;
	description?: string;
	photo?: string;
	rank?: string;
	group_id?: number;
	price?: number;
}
