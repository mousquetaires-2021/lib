import { Injectable } from '@angular/core';

import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { HttpService } from './http.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ServerService {
	userToken: BehaviorSubject<any> = new BehaviorSubject<any>(null);
	serverUrl: string = environment.serverUrl;

	constructor(private _http: HttpService) {}

	getUrl(url: string): string {
		return this.serverUrl + url;
	}

	getOptions() {
		const json = { 'Content-Type': 'application/json' };
		const token = this.getToken();
		if (token) {
			json['Authorization'] = token;
		}
		const headers = new HttpHeaders(json);

		return { headers: headers };
	}

	handleError(error) {
		console.log('handleError', error);
		if (error.status === 403) {
			window.location.href = '/';
			return Promise.reject('Veuillez vous reconnecter');
		} else if (error.status === 404) {
			return Promise.reject('Please check your internet connection.');
		} else if (error.status === undefined) {
			return Promise.reject(error.toString());
		} else {
			const defaultErrorText = 'Please check your internet connection.';
			let err = error.error || error.statusText || defaultErrorText;
			if (err === 'error' || typeof err !== 'string') {
				err = defaultErrorText;
			}

			return Promise.reject(err);
		}
	}

	/* TOKEN */
	getToken(): any {
		if (this.userToken.getValue() == null) {
			if (localStorage.getItem('token')) {
				this.setToken(localStorage.getItem('token'));
			}
		}

		return this.userToken.getValue();
	}

	setToken(t): void {
		this.userToken.next(t);
		localStorage.setItem('token', t);
	}

	removeToken() {
		this.userToken.next(null);
		localStorage.removeItem('token');
	}

	/* HTTPs request */
	get(url, options = {}): Promise<any> {
		return this._http.get(this.getUrl(url), { ...this.getOptions(), ...options }).catch(this.handleError);
	}

	post(url, params = {}, options = {}): Promise<any> {
		return this._http.post(this.getUrl(url), params, { ...this.getOptions(), ...options }).catch(this.handleError);
	}

	put(url, params = {}, options = {}): Promise<any> {
		return this._http.put(this.getUrl(url), params, { ...this.getOptions(), ...options }).catch(this.handleError);
	}

	delete(url, options = {}): Promise<any> {
		return this._http.delete(this.getUrl(url), { ...this.getOptions(), ...options }).catch(this.handleError);
	}

	download(url, documentName) {
		const oReq = new XMLHttpRequest();
		const promise = new Promise((resolve, reject) => {
			if (documentName !== null) {
				oReq.open('GET', this.serverUrl + url, true);
				oReq.responseType = 'blob';

				oReq.onload = function() {
					switch (oReq.status) {
						case 200:
							const blob = oReq.response,
								url = (window.URL || window['webkitURL']).createObjectURL(blob),
								link = document.createElement('a');
							link.setAttribute('href', url);
							link.setAttribute('download', documentName);
							link.click();
							resolve(true);
							break;
						default:
							reject('Document not found');
							break;
					}
				};
				oReq.setRequestHeader('token', this.getToken());
				oReq.send();
			} else {
				reject('Document name is null');
			}
		});

		return promise;
	}
}
