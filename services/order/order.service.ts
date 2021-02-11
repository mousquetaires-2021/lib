import { Injectable } from '@angular/core';
import { OrderInferface } from 'lib/interfaces/order-interface';
import { BehaviorSubject } from 'rxjs';
import { ServerService } from '../http-server/server.service';

@Injectable({
	providedIn: 'root'
})
export class OrderService {
	orders: BehaviorSubject<OrderInferface[]> = new BehaviorSubject<OrderInferface[]>([]);
	orderSelected: BehaviorSubject<OrderInferface> = new BehaviorSubject<OrderInferface>(null);
	constructor(private serverService: ServerService) {}

	getOrder(restaurantId: number) {
		return this.serverService
			.post('orders/get-order', { restaurant_id: restaurantId })
			.then((data) => data.data || null);
	}

	updateOrder(params) {
		return this.serverService.put('orders/update-order', params).then((data) => data.data || null);
	}

	confirmOrder(orderId: number) {
		return this.serverService.post('orders/confirm-order', { order_id: orderId }).then((data) => data.data || null);
	}

	requestOrder(orderId: number) {
		return this.serverService.post('orders/request-order', { order_id: orderId }).then((data) => data.data || null);
	}

	getMyOrders() {
		return this.serverService.get('orders/get-my-orders').then((data) => data.data || []);
	}

	getOrderDetails(id: number) {
		return this.serverService.get('orders/get-order-details/' + id).then((data) => data.data || null);
	}

	getRestaurantOrders(id: number) {
		return this.serverService.get('orders/get-restaurant-orders/' + id).then((data) => data.data || []);
	}

	getOrderFullDetails(id: number) {
		return this.serverService.get('orders/get-full-order-details/' + id).then((data) => data.data || []);
	}
}
