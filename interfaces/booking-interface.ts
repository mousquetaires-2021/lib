import { UserInterface } from './user-interface';

export interface BookingInterface {
	booking_status?: number;
	nb_person?: number;
	date_reservation?: number;
	user?: UserInterface;
}
