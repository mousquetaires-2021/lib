import { Injectable } from '@angular/core';
import { NotificationInterface } from 'lib/interfaces/notification-interface';
import { ServerService } from '../http-server/server.service';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    constructor(private serverService: ServerService) { }

    sendNotification(target: string, notification: NotificationInterface) {
        return this.serverService.post(`notifications/${target}`, notification).then(data => data.data || null);
    }
}