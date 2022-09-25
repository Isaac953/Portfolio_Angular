import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
