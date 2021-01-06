import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
	templateUrl: './change-password.page.html',
	styleUrls: [ './change-password.page.scss' ]
})
export class ChangePasswordPage {
	form = new FormGroup({
		password: new FormControl(),
		confirmPassword: new FormControl()
	});
	constructor(private authService: AuthService, private matSnackBar: MatSnackBar, private route: ActivatedRoute) {}

	onSubmit() {
		const { password, confirmPassword } = this.form.value;
		const token = this.route.snapshot.paramMap.get('key');

		if (password !== confirmPassword) {
			this.matSnackBar.open('Vos mot de passe ne sont pas identiques.', null, {
				horizontalPosition: 'center',
				verticalPosition: 'top'
			});
			return;
		}

		this.authService
			.changePassword({ password, token })
			.then((r) => {
				console.log(r);
				this.matSnackBar.open('Le mot de passe est bien changé.', null, {
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
