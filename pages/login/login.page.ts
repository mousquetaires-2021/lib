import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
	templateUrl: './login.page.html',
	styleUrls: [ './login.page.scss' ]
})
export class LoginPage {
	form = new FormGroup({
		email: new FormControl(),
		password: new FormControl()
	});
	constructor(private authService: AuthService, private matSnackBar: MatSnackBar, private router: Router) {}

	onSubmit() {
		const { email, password } = this.form.value;

		this.authService
			.login({ email, password, backoffice: true })
			.then(() => {
				this.router.navigate([ '/dashboard' ]);
			})
			.catch((err) => {
				this.matSnackBar.open(err, null, {
					horizontalPosition: 'center',
					verticalPosition: 'top'
				});
			});
	}
}
