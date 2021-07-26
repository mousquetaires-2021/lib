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

	getRestaurantDay(date: Date, restaurantId: number, hideUsers: boolean) {
		return this.serverService
			.post('booking/get-restaurant-booking-date', { date, restaurantId, hideUsers: hideUsers ? 1 : 0 })
			.then((data) => data.data || []);
	}

	getRestaurantPreview(restaurantId: number) {
		return this.serverService.get(`booking/restaurant-preview/${restaurantId}`).then((data) => data.data || null);
	}

	makeReservationDate(restaurantId: number, date: Date, nbPerson: number) {
		return this.serverService.post('booking/make-reservation-date', { restaurantId, date, nbPerson }).then((data) => data.data || null);
	}

	removeReservationDate(restaurantId: number, date: Date) {
		return this.serverService.post('booking/remove-reservation-date', { restaurantId, date }).then((data) => data.data || null);
	}

	getRestaurantUser(restaurantId: number) {
		return this.serverService.get(`booking/user-restaurant-status/${restaurantId}`).then((data) => data.data || []);
	}
}
