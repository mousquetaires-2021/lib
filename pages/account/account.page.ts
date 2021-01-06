import { UserInferface } from '@/interfaces/user-interface';
import { UserService } from '@/services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
	templateUrl: './account.page.html',
	styleUrls: [ './account.page.scss' ]
})
export class AccountPage implements OnInit {
	user: UserInferface;
	formMail = new FormGroup({
		email: new FormControl(),
		password: new FormControl()
	});
	formPassword = new FormGroup({
		password: new FormControl(),
		newPassword: new FormControl(),
		confirmNewPassword: new FormControl()
	});
	constructor(private userService: UserService, private matSnackBar: MatSnackBar) {
		this.userService.user.subscribe((u) => (this.user = u));
	}

	ngOnInit() {}

	onSubmitEmail() {
		this.userService
			.updateAccount(this.formMail.value)
			.then((user) => {
				this.userService.setUser(user);
				this.matSnackBar.open('Informations mise à jour.', null, {
					horizontalPosition: 'center',
					verticalPosition: 'top'
				});
			})
			.catch((err) => {
				this.matSnackBar.open(err, null, {
					horizontalPosition: 'center',
					verticalPosition: 'top'
				});
			});
	}

	onSubmitPassword() {
		const { password, newPassword, confirmNewPassword } = this.formPassword.value;
		if (newPassword !== confirmNewPassword) {
			this.matSnackBar.open('Les mots de passe ne sont pas identiques.', null, {
				horizontalPosition: 'center',
				verticalPosition: 'top'
			});
			return;
		}

		this.userService
			.updateAccount({ password, newPassword })
			.then((user) => {
				this.userService.setUser(user);
				this.matSnackBar.open('Mot de passe mis à jour.', null, {
					horizontalPosition: 'center',
					verticalPosition: 'top'
				});
			})
			.catch((err) => {
				this.matSnackBar.open(err, null, {
					horizontalPosition: 'center',
					verticalPosition: 'top'
				});
			});
	}
}
