import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from '../../photo/photo.component';

@Component({
  selector: 'ap-photos',
  standalone: true,
  imports: [CommonModule, PhotoComponent],
  templateUrl: './photos.html',
  styleUrl: './photos.scss',
})
export class Photos implements OnChanges {
  @Input() photos: Photo[] = [];
  rows: Photo[][] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['photos'] && changes['photos'].currentValue)
      this.rows = this.groupColumns(this.photos);
  }

  groupColumns(photos: Photo[]): Photo[][] {
    const newRows = [];
    for (let index = 0; index < photos.length; index += 3) {
      newRows.push(photos.slice(index, index + 3));
    }

    return newRows;
  }
}
