import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardPage } from './dashboard.page';
import { routes } from './dashboard.routing';
import { ComponentsConnectedModule } from '@/components-connected/components.module';

@NgModule({
	declarations: [ DashboardPage ],
	imports: [ CommonModule, RouterModule.forChild(routes), ComponentsConnectedModule ]
})
export class DashboardModule {}
