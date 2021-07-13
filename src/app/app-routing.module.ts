import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApplicationFrameComponent } from './shared/components/application-frame/application-frame.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: '',
    component: ApplicationFrameComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
      },
      {
        path: 'home',
        pathMatch: 'full',
        loadChildren: () => import('./home/home.module').then(module => module.HomeModule)
      },
      {
        path: 'movies',
        loadChildren: () => import('./movies/movies.module').then(module => module.MoviesModule)
      },
      {
        path: 'tv',
        loadChildren: () => import('./tv/tv.module').then(module => module.TvModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
