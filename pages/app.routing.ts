import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard.service';

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/login',
		pathMatch: 'full'
	},
	{
		path: 'login',
		loadChildren: () => import('./login/login.module').then((mod) => mod.LoginModule)
	},
	{
		path: 'forgot-password',
		loadChildren: () => import('./forgot-password/forgot-password.module').then((mod) => mod.ForgotPasswordModule)
	},
	{
		path: 'change-password',
		loadChildren: () => import('./change-password/change-password.module').then((mod) => mod.ChangePasswordModule)
	},
	{
		path: 'dashboard',
		loadChildren: () => import('./dashboard/dashboard.module').then((mod) => mod.DashboardModule),
		canActivate: [ AuthGuard ]
	},
	{
		path: 'users',
		loadChildren: () => import('./users/users.module').then((mod) => mod.UsersModule),
		canActivate: [ AuthGuard ]
	},
	{
		path: 'account',
		loadChildren: () => import('./account/account.module').then((mod) => mod.AccountModule),
		canActivate: [ AuthGuard ]
	},
	{
		path: '**',
		loadChildren: () => import('./errors/error-404/error-404.module').then((mod) => mod.Error404Module)
	}
];
@NgModule({
	imports: [ RouterModule.forRoot(appRoutes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
