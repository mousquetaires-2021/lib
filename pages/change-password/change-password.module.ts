import { MaterialModule } from '@/libs/material.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChangePasswordPage } from './change-password.page';
import { ChangePasswordRouting } from './change-password.routing';

@NgModule({
	declarations: [ ChangePasswordPage ],
	imports: [ ChangePasswordRouting, MaterialModule, FormsModule, ReactiveFormsModule, RouterModule ]
})
export class ChangePasswordModule {}
