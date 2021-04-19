export interface DeliverProfilInterface {
	user_id?: number;
	status?: number;
	deliver_way?: string;
	deliver_zone?: string;
	photo?: string;
	siren?: string;
	photo_identity?: string;
	photo_home_address?: string;
	full_address?: string;
	rejection_reason?: string;
	'user.first_name'?: string;
	'user.last_name'?: string;
	'user.email'?: string;
	'user.phone'?: string;
}
