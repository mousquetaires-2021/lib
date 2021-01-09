import { Injectable } from '@angular/core';
import { ServerService } from '../http-server/server.service';

@Injectable({
	providedIn: 'root'
})
export class RestaurantService {
	constructor(private serverService: ServerService) {}

	getRestaurant() {
		return this.serverService.get('restaurants/get-restaurant').then((data) => {
			return data;
		});
	}
}
