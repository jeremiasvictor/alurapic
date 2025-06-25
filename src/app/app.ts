import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PhotosModule } from './photos/photos.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, PhotosModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  photos = [
    {
      url: 'https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?_gl=1*qhv7q7*_ga*OTU4NjUyNzcxLjE3NTA4MDg1MTQ.*_ga_8JE65Q40S6*czE3NTA4MDg1MTQkbzEkZzEkdDE3NTA4MDg1MjYkajQ4JGwwJGgw',
      description: 'Esquilo',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2016/04/06/01/51/fox-1310840_1280.jpg',
      description: 'Raposa',
    },
  ];
}
