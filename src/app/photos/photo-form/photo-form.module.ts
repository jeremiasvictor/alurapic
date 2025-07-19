import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PhotoForm } from './photo-form';

@NgModule({
  imports: [CommonModule, PhotoForm],
  exports: [PhotoForm],
})
export class PhotoFormModule {}
