import { Injectable } from '@angular/core';
import { ServerService } from '../http-server/server.service';

@Injectable({
	providedIn: 'root'
})
export class PerformanceService {
	constructor(private serverService: ServerService) {}

	getRestaurantPerformances(restaurantId) {
		return this.serverService
			.get('performances/get-all-performances/' + restaurantId)
			.then((data) => data.data || []);
	}

	connectAccountToStripe(restaurantId) {
		return this.serverService.get('performances/connect-stripe/' + restaurantId).then((data) => data.data);
	}

	isConnectedToStripe(restaurantId) {
		return this.serverService.get('performances/is-connected-to-stripe/' + restaurantId).then((data) => data.data);
	}

	payOutStripe(restaurantId) {
		return this.serverService.get('performances/pay-out-stripe/' + restaurantId).then((data) => data.data);
	}
}
