import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, CardComponent],
  exports: [CardComponent],
})
export class CardModule {}
