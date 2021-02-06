import { Injectable } from '@angular/core';
import { FoodTypeInterface } from 'lib/interfaces/restaurant-interface';
import { BehaviorSubject } from 'rxjs';
import { ServerService } from '../http-server/server.service';

@Injectable({
	providedIn: 'root'
})
export class FoodService {
	selectedFoodtype: BehaviorSubject<FoodTypeInterface> = new BehaviorSubject<FoodTypeInterface>(null);

	constructor(private serverService: ServerService) {}
	addFoodType(restaurantId, name = '') {
		return this.serverService.post('foods/add-food-types', { name, restaurantId }).then((data) => data.data || []);
	}

	getFoodTypeDetails(id) {
		return this.serverService.get('foods/get-food-type-details/' + id).then((data) => data.data || null);
	}

	reorderFoodType(list) {
		return this.serverService.put('foods/reorder-food-types', { list });
	}
}
