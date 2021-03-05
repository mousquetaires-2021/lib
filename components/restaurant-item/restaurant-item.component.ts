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
}
