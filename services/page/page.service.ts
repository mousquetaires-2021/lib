import { Injectable } from '@angular/core';
import { ServerService } from '../http-server/server.service';

@Injectable({
	providedIn: 'root'
})
export class PageService {
	constructor(private serverService: ServerService) {}

	getPage(pageId) {
		return this.serverService.get('pages/get-page/' + pageId).then((data) => data.data || null);
	}
}
