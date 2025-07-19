import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PhotoComponent } from './photo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule, PhotoComponent],
  exports: [PhotoComponent],
})
export class PhotoModule {}
