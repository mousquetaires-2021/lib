import { Injectable } from '@angular/core';
import { ServerService } from '../http-server/server.service';

@Injectable({
	providedIn: 'root'
})
export class OrderService {
	constructor(private serverService: ServerService) {}

	getOrder(restaurantId) {
		return this.serverService
			.post('orders/get-order', { restaurant_id: restaurantId })
			.then((data) => data.data || null);
	}

	updateOrder(params) {
		return this.serverService.put('orders/update-order', params).then((data) => data.data || null);
	}

	confirmOrder(orderId) {
		return this.serverService.post('orders/confirm-order', { order_id: orderId }).then((data) => data.data || null);
	}

	requestOrder(orderId) {
		return this.serverService.post('orders/request-order', { order_id: orderId }).then((data) => data.data || null);
	}

	getMyOrders() {
		return this.serverService.get('orders/get-my-orders').then((data) => data.data || []);
	}

	getOrderDetails(id) {
		return this.serverService.get('orders/get-order-details/' + id).then((data) => data.data || null);
	}
}
