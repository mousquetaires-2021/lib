import { Injectable } from '@angular/core';
import { ServerService } from '../http-server/server.service';
import { UserService } from '../user/user.service';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	redirectUrl: string = null;

	constructor(private serverService: ServerService, private userService: UserService) {}

	async userConnected() {
		const jwToken = this.serverService.getToken();
		const tmpUser = this.userService.user.getValue();
		if (tmpUser) {
			return tmpUser;
		} else {
			const http = await this.userInfos();
			if (jwToken == null || !http.user) {
				this.userService.setUser(null);
				return null;
			}

			this.userService.setUser(http.user);
			return http.user;
		}
	}

	async userAdminConnected() {
		const jwToken = this.serverService.getToken();
		const tmpUser = this.userService.user.getValue();
		if (tmpUser) {
			return tmpUser;
		} else {
			const http = await this.userAdminInfos();
			if (jwToken == null || !http.user) {
				this.userService.setUser(null);
				return null;
			}

			this.userService.setUser(http.user);
			return http.user;
		}
	}

	userAdminInfos() {
		return this.serverService.get('auths/auto-login-admin').then((data) => {
			return data;
		});
	}

	userInfos() {
		return this.serverService.get('auths/auto-login').then((data) => {
			return data;
		});
	}

	login(params = {}): Promise<any> {
		return this.serverService.post('auths/login', params).then((data) => {
			this.serverService.setToken(data.token);
			return true;
		});
	}

	forgotPassword(email): Promise<any> {
		return this.serverService.post('auths/forgot-password', { email }).then((data) => {
			return data;
		});
	}

	changePassword(params = {}): Promise<any> {
		return this.serverService.post('auths/change-password', params).then((data) => {
			return data;
		});
	}
}
