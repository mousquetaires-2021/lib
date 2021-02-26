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
}

export interface ProductOrderInterface {
	id?: number;
	product_id?: number;
	quantity?: number;
	'food.description'?: string;
	'food.id'?: number;
	'food.name'?: string;
	'food.price'?: number;
	'food.tva'?: number;
}
