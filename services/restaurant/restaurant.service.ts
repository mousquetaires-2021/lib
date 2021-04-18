import { Injectable } from '@angular/core';
import { RestaurantCriterionsInterface } from 'lib/interfaces/restaurant-criterions-interface';
import { RestaurantInferface } from 'lib/interfaces/restaurant-interface';
import { BehaviorSubject } from 'rxjs';
import { ServerService } from '../http-server/server.service';

@Injectable({
	providedIn: 'root'
})
export class RestaurantService {
	restaurants: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
	restaurant: BehaviorSubject<RestaurantInferface> = new BehaviorSubject<RestaurantInferface>(null);
	criterions: BehaviorSubject<RestaurantCriterionsInterface> = new BehaviorSubject<RestaurantCriterionsInterface>(
		null
	);

	constructor(private serverService: ServerService) {}

	getRestaurantDetails(id = null) {
		return this.serverService.get('restaurants/get-details/' + id).then((data) => data.data || null);
	}

	getRestaurant(id = null) {
		if (id) {
			return this.serverService.get('restaurants/get/' + id).then((data) => data.data || null);
		} else {
			return this.serverService.get('restaurants/get-restaurant').then((data) => {
				this.restaurants.next(data.data || []);
				return data.data || [];
			});
		}
	}

	createRestaurant(params) {
		return this.serverService.post('restaurants/add-restaurant', params).then(() => this.getRestaurant());
	}

	updateRestaurant(restaurantId, params) {
		return this.serverService.put('restaurants/update-restaurant', { restaurantId, ...params });
	}

	getRestaurants() {
		return this.serverService.get('restaurants/list').then((data) => data.data || []);
	}

	adminUpdateRestaurant(params) {
		return this.serverService.put('restaurants/admin-update', params);
	}

	adminCreateRestaurant(params) {
		return this.serverService.post('restaurants/admin-create', params);
	}

	searchRestaurant(params) {
		return this.serverService.post('restaurants/search', params).then((data) => data.data || null);
	}

	getCriterions(): Promise<RestaurantCriterionsInterface> {
		if (this.criterions.getValue()) {
			return new Promise((resolve) => {
				resolve(this.criterions.getValue());
			});
		}

		return this.serverService.get('restaurants/criterions').then((data) => data.data || null).then((data) => {
			this.criterions.next(data);
			return data;
		});
	}

	theOne({ latitude, longitude }) {
		return this.serverService.post('restaurants/the-one', { latitude, longitude }).then((data) => data.data || []);
	}

	getRestaurantsArroundMe({ latitude, longitude }) {
		return this.serverService
			.post('restaurants/get-arround-me', { latitude, longitude })
			.then((data) => data.data || []);
	}

	getFoodTypes(restaurantId) {
		return this.serverService.get('restaurants/food-types/' + restaurantId).then((data) => data.data || []);
	}

	createRestaurantAndAccount(params) {
		return this.serverService.post('restaurants/create-restaurant-and-account', params).then((data) => {
			this.serverService.setToken(data.token);
			return true;
		});
	}

	pauseRestaurationPreparations(restaurantId) {
		return this.serverService.put('restaurants/pause-restauration-id/' + restaurantId);
	}

	evaluate(restaurantId, note) {
		return this.serverService.put('restaurants/evaluate', { restaurantId, note }).then((data) => data.data || null);
	}

	sentAdminMessage(params) {
		return this.serverService.post('restaurants/sent-admin-message', params);
	}

	getMapRestaurants() {
		return this.serverService.get('restaurants/map-list').then((data) => data.data || []);
	}
}
