import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [PhotoComponent, HttpClientModule],
  exports: [PhotoComponent],
})
export class PhotosModule {}
