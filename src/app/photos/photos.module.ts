import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';

@NgModule({
  imports: [PhotoComponent],
  exports: [PhotoComponent],
})
export class PhotosModule {}
