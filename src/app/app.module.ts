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
import { RandomComponent } from './random/random.component';
import { RandomPipe } from './random.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    PostDetailComponent,
    CategoryPipe,
    PopularComponent,
    RandomComponent,
    RandomPipe
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
