import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccountPage } from './account.page';
import { routes } from './account.routing';
import { ComponentsConnectedModule } from '@/components-connected/components.module';
import { MaterialModule } from '@/libs/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [ AccountPage ],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		ComponentsConnectedModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule
	]
})
export class AccountModule {}
