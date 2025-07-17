import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ap-load-button',
  imports: [CommonModule],
  templateUrl: './load-button.html',
  styleUrl: './load-button.scss',
})
export class LoadButton {
  @Input()
  hasMore: boolean = false;
}
