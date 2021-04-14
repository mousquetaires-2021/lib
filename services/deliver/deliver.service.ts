import { Injectable } from '@angular/core';
import { ServerService } from '../http-server/server.service';

@Injectable({
	providedIn: 'root'
})
export class DeliverService {
	constructor(private serverService: ServerService) {}

	getStatus() {
		return this.serverService.get('delivers/get-account-status').then((data) => data.data);
	}

	getProfil() {
		return this.serverService.get('delivers/get-account-profil').then((data) => data.data);
	}
}
