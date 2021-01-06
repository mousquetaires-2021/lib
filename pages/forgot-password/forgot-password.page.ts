import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
	templateUrl: './forgot-password.page.html',
	styleUrls: [ './forgot-password.page.scss' ]
})
export class ForgotPasswordPage {
	form = new FormGroup({
		email: new FormControl()
	});
	constructor(private authService: AuthService, private matSnackBar: MatSnackBar) {}

	onSubmit() {
		const { email } = this.form.value;

		this.authService
			.forgotPassword(email)
			.then((r) => {
				console.log(r);
				this.matSnackBar.open("Le lien de changement de mot de passe vient d'être envoyé par mail.", null, {
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
