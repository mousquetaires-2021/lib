import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AppService {
	loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	needAccountToView: BehaviorSubject<string> = new BehaviorSubject<string>(null);
	constructor() {}

	needAccount(message) {
		this.needAccountToView.next(message);
	}
}
