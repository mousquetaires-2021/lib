import { Injectable } from '@angular/core';
import { RestaurantCriterionsInterface } from 'lib/interfaces/restaurant-criterions-interface';
import { BehaviorSubject } from 'rxjs';
import { ServerService } from '../http-server/server.service';

@Injectable({
	providedIn: 'root'
})
export class RestaurantService {
	restaurants: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
	criterions: BehaviorSubject<RestaurantCriterionsInterface> = new BehaviorSubject<RestaurantCriterionsInterface>(
		null
	);

	constructor(private serverService: ServerService) {}

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
		return this.serverService.post('restaurants/add-restaurant', params).then(this.getRestaurant.bind(this));
	}

	updateCover(restaurantId, cover) {
		return this.serverService.put('restaurants/update-cover', { restaurantId, cover });
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
}
