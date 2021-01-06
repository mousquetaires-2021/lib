import { MaterialModule } from '@/libs/material.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ForgotPasswordPage } from './forgot-password.page';
import { ForgotPasswordRouting } from './forgot-password.routing';

@NgModule({
	declarations: [ ForgotPasswordPage ],
	imports: [ ForgotPasswordRouting, MaterialModule, FormsModule, ReactiveFormsModule, RouterModule ]
})
export class ForgotPasswordModule {}
