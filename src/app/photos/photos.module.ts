import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo/photo.component';
import { PhotoList } from './photo-list/photo-list';
import { PhotoForm } from './photo-form/photo-form';

@NgModule({
  imports: [
    PhotoComponent,
    PhotoList,
    PhotoForm,
    HttpClientModule,
    CommonModule,
  ],
})
export class PhotosModule {}
