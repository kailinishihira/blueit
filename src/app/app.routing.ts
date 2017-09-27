import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PopularComponent } from './popular/popular.component';
import { RandomComponent } from './random/random.component';

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
  },
  {
    path: 'random',
    component: RandomComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
