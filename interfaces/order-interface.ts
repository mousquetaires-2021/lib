import { RestaurantInferface } from './restaurant-interface';
import { UserInferface } from './user-interface';

export interface OrderInferface {
	id?: number;
	restaurant_id?: number;
	status?: number;
	products?: ProductOrderInterface[];
	total?: number;
	quantity?: number;
	restaurant?: RestaurantInferface;
	updated_at?: number;
	rejection_raison?: string;
	user?: UserInferface;
	user_service_charge_sum?: number;
	restaurant_service_charge_sum?: number;
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
