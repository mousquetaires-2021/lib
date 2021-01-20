import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ServerService } from '../http-server/server.service';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	user: BehaviorSubject<any> = new BehaviorSubject<any>(null);

	constructor(private serverService: ServerService) {}

	setUser(user) {
		this.user.next(user);

		if (user && user.token) {
			this.serverService.setToken(user.token);
		}
	}

	updateAccount(params) {
		return this.serverService.put('users/update-account', params).then((data) => {
			return data;
		});
	}

	createAccount(params) {
		return this.serverService.post('users/create-account', params).then((data) => {
			return data;
		});
	}

	getUsers() {
		return this.serverService.get('users/list').then((data) => data.data || []);
	}

	getUser(id) {
		return this.serverService.get('users/get/' + id).then((data) => data.data || null);
	}

	mobileCreation(phone) {
		return this.serverService.post('users/mobile-creation', { phone }).then((data) => data.data || null);
	}

	mobileValidation(phone, code) {
		return this.serverService.post('users/mobile-validation', { phone, code }).then((data) => data.data || null);
	}
}
