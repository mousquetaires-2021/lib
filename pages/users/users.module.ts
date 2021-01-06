import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersPage } from './users.page';
import { routes } from './users.routing';
import { ComponentsConnectedModule } from '@/components-connected/components.module';
import { MaterialModule } from '@/libs/material.module';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListUsersComponent } from './list-users/list-users.component';

@NgModule({
	declarations: [ UsersPage, EditUserComponent, ListUsersComponent ],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		ComponentsConnectedModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule
	]
})
export class UsersModule {}
