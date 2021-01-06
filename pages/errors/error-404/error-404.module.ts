import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Error404Page } from './error-404.page';
import { routes } from './error-404.routing';

@NgModule({
	declarations: [ Error404Page ],
	imports: [ CommonModule, RouterModule.forChild(routes) ]
})
export class Error404Module {}
