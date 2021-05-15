import { Injectable } from '@angular/core';
import { ServerService } from '../http-server/server.service';

@Injectable({
	providedIn: 'root'
})
export class BookingService {
	constructor(private serverService: ServerService) {}

	getRestaurantStatus(restaurantId: number) {
		return this.serverService.get(`booking/restaurant-status/${restaurantId}`).then((data) => data.data || null);
	}

	updateStatus(params) {
		return this.serverService.put('booking/update-restaurant-status', params).then((data) => data.data || null);
	}

	getRestaurantDay(date: Date, restaurantId: number) {
		return this.serverService
			.post('booking/get-restaurant-booking-date', { date, restaurantId })
			.then((data) => data.data || []);
	}
}
