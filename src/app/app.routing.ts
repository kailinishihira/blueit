import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PopularComponent } from './popular/popular.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SplashComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent
  },
  {
    path: 'popular',
    component: PopularComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
