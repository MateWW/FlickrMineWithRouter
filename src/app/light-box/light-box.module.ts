import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightBoxRoutingModule } from './light-box-routing.module';

import { LightBoxComponent } from './light-box.component';

import { CommunicationService } from "../communication.service";
import { LightBoxService } from "./light-box.service";
import { LightBoxPhotoComponent } from './light-box-photo.component';
import { LightBoxDetailsComponent } from './light-box-details.component';

@NgModule({
  imports: [
    CommonModule,
    LightBoxRoutingModule
  ],
  declarations: [
    LightBoxComponent,
    LightBoxPhotoComponent,
    LightBoxDetailsComponent
  ],
  providers:[
    CommunicationService,
    LightBoxService
  ],
  exports:[
    LightBoxComponent
  ]
})
export class LightBoxModule { }
