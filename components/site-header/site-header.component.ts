import { Component, OnInit } from '@angular/core';
import { MainClass } from 'lib/libs/main-class';

@Component({
	selector: 'site-header',
	templateUrl: './site-header.component.html',
	styleUrls: [ './site-header.component.scss' ]
})
export class SiteHeaderComponent extends MainClass implements OnInit {
	constructor() {
		super();
	}

	ngOnInit() {}
}
