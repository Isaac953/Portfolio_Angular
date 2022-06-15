import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LayoutHeaderComponent } from './components/layout/layout-header/layout-header.component';
import { LayoutSidenavComponent } from './components/layout/layout-sidenav/layout-sidenav.component';
import { LayoutContentComponent } from './components/layout/layout-content/layout-content.component';
import { LayoutFooterComponent } from './components/layout/layout-footer/layout-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutSidenavComponent,
    LayoutContentComponent,
    LayoutFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
