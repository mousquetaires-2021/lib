export interface OrderInferface {
	id?: number;
	restaurant_id?: number;
	status?: number;
	products?: ProductOrderInterface[];
}

export interface ProductOrderInterface {
	id?: number;
	product_id?: number;
	quantity?: number;
}
