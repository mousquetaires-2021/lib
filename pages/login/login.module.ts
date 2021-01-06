import { MaterialModule } from '@/libs/material.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginPage } from './login.page';
import { LoginPageModule } from './login.routing';

@NgModule({
	declarations: [ LoginPage ],
	imports: [ LoginPageModule, MaterialModule, FormsModule, ReactiveFormsModule, RouterModule ]
})
export class LoginModule {}
