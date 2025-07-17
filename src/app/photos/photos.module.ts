import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo/photo.component';
import { PhotoList } from './photo-list/photo-list';
import { PhotoForm } from './photo-form/photo-form';
import { Photos } from './photo-list/photos/photos';
import { FilterByDescription } from './photo-list/filter-by-description.pipe';
import { LoadButton } from './photo-list/load-button/load-button';

@NgModule({
  imports: [
    PhotoComponent,
    PhotoList,
    Photos,
    PhotoForm,
    HttpClientModule,
    CommonModule,
    FilterByDescription,
    LoadButton,
  ],
})
export class PhotosModule {}
