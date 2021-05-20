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

	getDetailStatus() {
		return this.serverService.get('delivers/get-account-detail-status').then((data) => data.data);
	}

	getProfil() {
		return this.serverService.get('delivers/get-account-profil').then((data) => data.data);
	}

	updateProfil(params) {
		return this.serverService.put('delivers/update-account-profil', params).then((data) => data.data);
	}

	getDelivers() {
		return this.serverService.get('delivers/get-list').then((data) => data.data || []);
	}

	getAdminDetail(id) {
		return this.serverService.get('delivers/get-admin-details/' + id).then((data) => data.data);
	}

	adminUpdateProfilStatus(params) {
		return this.serverService.put('delivers/admin-update-account-profil', params).then((data) => data.data);
	}

	iAmReady() {
		return this.serverService.put('delivers/i-am-ready').then((data) => data.data);
	}

	iAmFinish() {
		return this.serverService.put('delivers/i-am-finish').then((data) => data.data);
	}

	getDeliverZones() {
		return this.serverService.get('delivers/get-zones').then((data) => data.data || []);
	}
}
