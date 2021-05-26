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

	getDeliverPerformances() {
		return this.serverService.get('performances/get-deliver-performances').then((data) => data.data || []);
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

	payOutStripeUser() {
		return this.serverService.get('performances/pay-out-stripe-user').then((data) => data.data);
	}

	isUserConnectedToStripe() {
		return this.serverService.get('performances/is-user-connected-to-stripe').then((data) => data.data);
	}

	connectUserAccountToStripe() {
		return this.serverService.get('performances/user-connect-to-stripe').then((data) => data.data);
	}
}
