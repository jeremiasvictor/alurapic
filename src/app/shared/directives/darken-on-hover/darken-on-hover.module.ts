import { NgModule } from '@angular/core';
import { DarkenOnHoverDirective } from './darken-on-hover.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, DarkenOnHoverDirective],
  exports: [DarkenOnHoverDirective],
})
export class DarkenOnHoverModule {}
