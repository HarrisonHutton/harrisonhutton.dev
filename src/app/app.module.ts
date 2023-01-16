import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { FooterComponent } from './footer/footer.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroductionComponent,
    AboutMeComponent,
    MyWorkComponent,
    FooterComponent,
    AudioPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
