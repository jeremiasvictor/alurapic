import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { Photos } from './photos/photos';
import { PhotoService } from '../photo/photo.service';
import { FilterByDescription } from './filter-by-description.pipe';
import { LoadButton } from './load-button/load-button';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'ap-photo-list',
  standalone: true,
  imports: [
    CommonModule,
    Photos,
    FilterByDescription,
    LoadButton,
    SearchComponent,
  ],
  templateUrl: './photo-list.html',
  styleUrl: './photo-list.scss',
})
export class PhotoList implements OnInit {
  photos: Photo[] = [];
  filter: string = '';
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params['userName'];
    this.photos = this.activatedRoute.snapshot.data['photos'];
  }

  load() {
    this.photoService
      .listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe((photos) => {
        this.filter = '';
        this.photos = this.photos.concat(photos);
        if (!photos.length) this.hasMore = false;
      });
  }
}
