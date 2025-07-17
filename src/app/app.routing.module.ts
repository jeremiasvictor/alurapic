import { Routes } from '@angular/router';

import { PhotoList } from './photos/photo-list/photo-list';
import { PhotoForm } from './photos/photo-form/photo-form';
import { NotFound } from './errors/not-found/not-found';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'user/flavio',
    pathMatch: 'full',
  },
  {
    path: 'user/:userName',
    component: PhotoList,
    resolve: { photos: PhotoListResolver },
  },
  { path: 'p/add', component: PhotoForm },
  { path: '**', component: NotFound },
];
