import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { CategoryPipe } from './category.pipe';
import { PopularComponent } from './popular/popular.component';
<<<<<<< HEAD
import { RandomComponent } from './random/random.component';
import { RandomPipe } from './random.pipe';
=======
>>>>>>> 544a044710e39a63ae5e19352971fc5063a653c5

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    PostDetailComponent,
    CategoryPipe,
<<<<<<< HEAD
    PopularComponent,
    RandomComponent,
    RandomPipe
=======
    PopularComponent
>>>>>>> 544a044710e39a63ae5e19352971fc5063a653c5
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
