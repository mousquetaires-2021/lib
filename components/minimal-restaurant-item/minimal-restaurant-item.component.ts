import { Component, Input, OnInit } from '@angular/core';
import { MinimalRestaurantInterface } from 'lib/interfaces/restaurant-interface';
import { MainClass } from 'lib/libs/main-class';

@Component({
	selector: 'minimal-restaurant-item',
	templateUrl: './minimal-restaurant-item.component.html',
	styleUrls: ['./minimal-restaurant-item.component.scss']
})
export class MinimalRestaurantItemComponent extends MainClass implements OnInit {
	@Input() restaurant: MinimalRestaurantInterface;

	constructor() {
		super();
	}

	ngOnInit() { }
}
