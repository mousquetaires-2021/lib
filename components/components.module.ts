import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'lib/libs/material.module';
import { LoadingComponent } from './loading/loading.component';
import { NgxImageCompressService } from 'ngx-image-compress';
import { BackIconComponent } from './back-icon/back-icon.component';
import { FullscreenLoadingComponent } from './fullscreen-loading/fullscreen-loading.component';

const list = [ LoadingComponent, BackIconComponent, FullscreenLoadingComponent ];

@NgModule({
	declarations: [ ...list ],
	imports: [ CommonModule, RouterModule, MaterialModule ],
	providers: [ NgxImageCompressService ],
	exports: list
})
export class ComponentsModule {}
