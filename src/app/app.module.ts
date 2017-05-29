import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { PhotoListModule } from './photo-list/photo-list.module';
import { LightBoxModule } from "./light-box/light-box.module";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';

import { CommunicationService } from "./communication.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PhotoListModule,
    LightBoxModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    CommunicationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
