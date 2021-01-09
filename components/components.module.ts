import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'lib/libs/material.module';
import { LoadingComponent } from './loading/loading.component';

const list = [ LoadingComponent ];

@NgModule({
	declarations: [ ...list ],
	imports: [ CommonModule, RouterModule, MaterialModule ],
	exports: list
})
export class ComponentsModule {}
