import { USER_ROLES } from '@/constants/role';
import { UserInferface } from '@/interfaces/user-interface';
import { UserService } from '@/services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	templateUrl: './edit-user.component.html',
	styleUrls: [ './edit-user.component.scss' ]
})
export class EditUserComponent implements OnInit {
	form = new FormGroup({
		email: new FormControl(),
		role: new FormControl(),
		password: new FormControl(),
		status: new FormControl(),
		firstName: new FormControl(),
		lastName: new FormControl(),
		gender: new FormControl(),
		bornDate: new FormControl(),
		photo: new FormControl()
	});
	user: UserInferface;
	USER_ROLES = USER_ROLES;
	constructor(
		private userService: UserService,
		private matSnackBar: MatSnackBar,
		private router: Router,
		private route: ActivatedRoute
	) {
		this.route.params.subscribe((params) => {
			if (params.id) {
				this.userService.getUser(params.id).then((u) => {
					this.user = u;
					this.init();
				});
			} else {
				this.user = null;
				this.init();
			}
		});
	}

	ngOnInit() {}

	init() {
		if (this.user) {
			this.form.get('email').setValue(this.user.email);
			this.form.get('password').setValue('');
			this.form.get('role').setValue(this.user.role);
			this.form.get('status').setValue(this.user.status);
			this.form.get('firstName').setValue(this.user.firstName);
			this.form.get('lastName').setValue(this.user.lastName);
			this.form.get('gender').setValue(this.user.gender);
			this.form.get('bornDate').setValue(this.user.bornDate);
			this.form.get('photo').setValue(this.user.photo);
		} else {
			this.form.get('email').setValue('');
			this.form.get('password').setValue('');
			this.form.get('role').setValue(0);
			this.form.get('status').setValue(1);
			this.form.get('firstName').setValue('');
			this.form.get('lastName').setValue('');
			this.form.get('gender').setValue('');
			this.form.get('bornDate').setValue('');
			this.form.get('photo').setValue('');
		}
	}

	onSubmit() {
		const { email, role, status, password, firstName, lastName, gender, bornDate, photo } = this.form.value;

		if (this.user) {
			this.userService
				.updateAccount({
					email,
					role,
					status,
					newPassword: password,
					id: this.user.id,
					firstName,
					lastName,
					gender,
					bornDate,
					photo
				})
				.then(() => {
					this.matSnackBar.open('Compte modifié !', null, {
						horizontalPosition: 'center',
						verticalPosition: 'top'
					});
					this.router.navigate([ '/users' ]);
				})
				.catch((err) => {
					this.matSnackBar.open(err, null, {
						horizontalPosition: 'center',
						verticalPosition: 'top'
					});
				});
		} else {
			this.userService
				.createAccount({ email, role, status, password, firstName, lastName, gender, bornDate, photo })
				.then(() => {
					this.matSnackBar.open('Compte crée !', null, {
						horizontalPosition: 'center',
						verticalPosition: 'top'
					});
					this.router.navigate([ '/users' ]);
				})
				.catch((err) => {
					this.matSnackBar.open(err, null, {
						horizontalPosition: 'center',
						verticalPosition: 'top'
					});
				});
		}
	}
}
