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
}
