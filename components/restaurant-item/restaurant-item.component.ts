import { Component, Input, OnInit } from '@angular/core';
import { RestaurantInferface } from 'lib/interfaces/restaurant-interface';
import { MainClass } from 'lib/libs/main-class';

@Component({
	selector: 'restaurant-item',
	templateUrl: './restaurant-item.component.html',
	styleUrls: [ './restaurant-item.component.scss' ]
})
export class RestaurantItemComponent extends MainClass implements OnInit {
	@Input() restaurant: RestaurantInferface;
	constructor() {
		super();
	}

	ngOnInit() {}

	getStringDistance(distanceInKm) {
		if (distanceInKm > 1) {
			return Math.round(distanceInKm * 100) / 100 + ' km.';
		} else {
			return Math.floor(distanceInKm * 1000) + ' m.';
		}
	}
}
