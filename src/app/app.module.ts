import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './modules/app-routing.module';

import { AppComponent } from './app.component';
import { PhotosService } from './services/photos.service';
import { PhotosComponent } from './components/photos/photos.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [AppComponent, PhotosComponent],
  bootstrap: [AppComponent],
  providers: [PhotosService],
})
export class AppModule {}
