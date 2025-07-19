import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Photo } from '../../photo/photo';
import { PhotoComponent } from '../../photo/photo.component';
import { CardModule } from '../../../shared/components/card/card.module';
import { DarkenOnHoverModule } from '../../../shared/directives/darken-on-hover/darken-on-hover.module';

@Component({
  selector: 'ap-photos',
  standalone: true,
  imports: [CommonModule, PhotoComponent, CardModule, DarkenOnHoverModule],
  templateUrl: './photos.html',
  styleUrl: './photos.scss',
})
export class Photos implements OnChanges {
  @Input() photos: Photo[] = [];
  rows: (Photo | null)[][] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['photos'] && changes['photos'].currentValue) {
      this.rows = this.groupColumns(this.photos);
      console.log('componente', this.rows);
    }
  }

  groupColumns(photos: Photo[]): (Photo | null)[][] {
    const newRows: (Photo | null)[][] = [];
    const photosCopy = [...photos];

    console.log(
      'groupColumns: Fotos recebidas antes do preenchimento:',
      photosCopy.length
    );
    while (photosCopy.length % 3 !== 0) {
      photosCopy.push(null as any);
    }

    console.log(
      'groupColumns: Fotos após preenchimento (total):',
      photosCopy.length
    );
    for (let index = 0; index < photos.length; index += 3) {
      newRows.push(photos.slice(index, index + 3));
    }

    console.log('groupColumns: newRows final:', newRows);
    return newRows;
  }
}
