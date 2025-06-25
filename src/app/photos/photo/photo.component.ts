import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ap-photo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'photo.component.html',
})
export class PhotoComponent {
  @Input() description!: string;
  @Input() url!: string;
}
