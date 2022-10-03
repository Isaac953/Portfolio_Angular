import { NgModule, Injectable } from '@angular/core';
import * as Hammer from 'hammerjs';
import {
  BrowserModule,
  HammerModule,
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG,
} from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/main/sidenav/sidenav.component';
import { McontentComponent } from './components/main/mcontent/mcontent.component';
import { NavigationComponent } from './components/main/navigation/navigation.component';
import { ModalComponent } from './components/main/mcontent/proyects/modal/modal.component';
import { CarouselComponent } from './components/main/mcontent/proyects/carousel/carousel.component';

// particular imports for hammer

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  override overrides = <any>{
    swipe: { direction: Hammer.DIRECTION_ALL },
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    SidenavComponent,
    McontentComponent,
    NavigationComponent,
    routingComponents,
    ModalComponent,
    CarouselComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, HammerModule],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
