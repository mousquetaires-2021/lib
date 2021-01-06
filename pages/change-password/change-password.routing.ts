import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordPage } from './change-password.page';

const routes: Routes = [
	{
		path: ':key',
		component: ChangePasswordPage
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class ChangePasswordRouting {}
