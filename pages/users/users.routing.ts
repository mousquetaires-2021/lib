import { Routes } from '@angular/router';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { UsersPage } from './users.page';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'list',
		pathMatch: 'full'
	},
	{
		path: 'list',
		component: ListUsersComponent
	},
	{
		path: 'edit',
		component: EditUserComponent
	},
	{
		path: 'edit/:id',
		component: EditUserComponent
	}
];
