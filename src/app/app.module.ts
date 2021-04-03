import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FeatureComponent } from './components/feature/feature.component';
import { RechtangleComponent } from './components/rechtangle/rechtangle.component';
import { PartnersComponent } from './components/partners/partners.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    GalleryComponent,
    FeatureComponent,
    RechtangleComponent,
    PartnersComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
