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

	updateOrderDelivery(params) {
		return this.serverService.put('orders/update-order-delivery', params).then((data) => data.data || null);
	}

	confirmOrder(orderId: number) {
		return this.serverService.post('orders/confirm-order', { order_id: orderId }).then((data) => data.data || null);
	}

	requestOrder(params) {
		return this.serverService.post('orders/request-order', params).then((data) => data.data || null);
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

	acceptOrder(id: number) {
		return this.serverService.put('orders/accept-order/' + id).then((data) => data.data || null);
	}

	inProgressOrder(id: number) {
		return this.serverService.put('orders/in-progress-order/' + id).then((data) => data.data || null);
	}

	completeOrder(id: number) {
		return this.serverService.put('orders/complete-order/' + id).then((data) => data.data || null);
	}

	finishOrder(id: number) {
		return this.serverService.put('orders/finish-order/' + id).then((data) => data.data || null);
	}

	deliverTakeAway(id: number) {
		return this.serverService.put('orders/deliver-take-away/' + id).then((data) => data.data || null);
	}

	cancelOrder(id: number, raison: string) {
		return this.serverService.put('orders/cancel-order/' + id, { raison }).then((data) => data.data || null);
	}

	getAllOrders() {
		return this.serverService.get('orders/get-orders').then((data) => data.data || []);
	}

	adminUpdateOrderStatus(params) {
		return this.serverService.put('orders/admin-update-status', params).then((data) => data.data || null);
	}
}
