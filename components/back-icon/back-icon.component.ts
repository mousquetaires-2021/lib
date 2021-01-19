import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'back-icon',
	templateUrl: './back-icon.component.html',
	styleUrls: [ './back-icon.component.scss' ]
})
export class BackIconComponent implements OnInit {
	@Input() backUrl: string;
	constructor() {}

	ngOnInit() {}
}
