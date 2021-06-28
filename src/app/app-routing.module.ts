import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApplicationFrameComponent } from './shared/components/application-frame/application-frame.component';
import { AuthorizationAPIKeyInterceptor } from './shared/interceptor/authorize.interceptor';

const routes: Routes = [
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
        loadChildren: ()=> import('./home/home.module').then(
          module => module.HomeModule
        )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizationAPIKeyInterceptor }
  ]
})
export class AppRoutingModule { }
