import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

import { Photos } from './photos/photos';

@Component({
  selector: 'app-photo-list',
  standalone: true,
  imports: [CommonModule, Photos],
  templateUrl: './photo-list.html',
  styleUrl: './photo-list.scss',
})
export class PhotoList implements OnInit {
  photos: Photo[] = [];

  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const userName = this.activatedRoute.snapshot.params['userName'];
    this.photoService
      .listFromUser(userName)
      .subscribe((photos) => (this.photos = photos));
  }
}
