import { RestaurantInferface } from './restaurant-interface';
import { UserInterface } from './user-interface';

export interface OrderInferface {
	id?: number;
	restaurant_id?: number;
	status?: number;
	products?: ProductOrderInterface[];
	total?: number;
	sum?: number; // equal total
	quantity?: number;
	restaurant?: RestaurantInferface;
	updated_at?: number;
	rejection_raison?: string;
	user?: UserInterface;
	user_service_charge_sum?: number;
	restaurant_service_charge_sum?: number;
	service_charge?: number; // equal user_service_charge_sum
	transferDone?: boolean;
	public_token?: string;
	delivery_option?: string;
	delivery_pricing?: number;
	order_full_address?: string;
	delivery_note?: string;
	distanceString?: string;
	distance?: number;
}

export interface ProductOrderInterface {
	id?: number;
	product_id?: number;
	quantity?: number;
	original_price?: number;
	original_name?: string;
	original_type?: string;
	'food.description'?: string;
	'food.id'?: number;
	'food.name'?: string;
	'food.price'?: number;
	'food.tva'?: number;
}
