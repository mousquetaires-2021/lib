import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ServerService } from '../http-server/server.service';

@Injectable({
	providedIn: 'root'
})
export class RestaurantService {
	restaurants: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

	constructor(private serverService: ServerService) {}

	getRestaurant() {
		return this.serverService.get('restaurants/get-restaurant').then((data) => {
			this.restaurants.next(data.data || []);
			return data.data || [];
		});
	}

	createRestaurant(params) {
		return this.serverService.post('restaurants/add-restaurant', params).then(this.getRestaurant.bind(this));
	}

	updateCover(restaurantId, cover) {
		return this.serverService.put('restaurants/update-cover', { restaurantId, cover });
	}
}
