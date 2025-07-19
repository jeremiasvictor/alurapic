import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoList } from './photo-list';
import { Photos } from './photos/photos';
import { LoadButton } from './load-button/load-button';
import { FilterByDescription } from './filter-by-description.pipe';
import { SearchComponent } from './search/search.component';

import { PhotoModule } from '../photo/photo.module';
import { CardModule } from '../../shared/components/card/card.module';
import { DarkenOnHoverModule } from '../../shared/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PhotoModule,
    CardModule,
    DarkenOnHoverModule,
    PhotoList,
    Photos,
    LoadButton,
    FilterByDescription,
    SearchComponent,
  ],
  exports: [
    PhotoList,
    Photos,
    LoadButton,
    FilterByDescription,
    SearchComponent,
    PhotoModule,
    CardModule,
    DarkenOnHoverModule,
  ],
})
export class PhotoListModule {}
