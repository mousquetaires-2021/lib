import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const list = [];

@NgModule({
	declarations: [ ...list ],
	imports: [ CommonModule, RouterModule ],
	exports: list
})
export class ComponentsModule {}
