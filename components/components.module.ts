import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';
import { NgxImageCompressService } from 'ngx-image-compress';
import { BackIconComponent } from './back-icon/back-icon.component';
import { FullscreenLoadingComponent } from './fullscreen-loading/fullscreen-loading.component';
import { MaterialModule } from '../libs/material.module';
import { FormImageComponent } from './form-image/form-image.component';
import { FormCounterComponent } from './form-counter/form-counter.component';
import { AccountIconComponent } from './account-icon/account-icon.component';
import { CloseIconComponent } from './close-icon/close-icon.component';
import { PopupComponent } from './popup/popup.component';

const list = [
	LoadingComponent,
	BackIconComponent,
	FullscreenLoadingComponent,
	FormImageComponent,
	FormCounterComponent,
	AccountIconComponent,
	CloseIconComponent,
	PopupComponent
];

@NgModule({
	declarations: [ ...list ],
	imports: [ CommonModule, RouterModule, MaterialModule ],
	providers: [ NgxImageCompressService ],
	exports: list
})
export class ComponentsModule {}
