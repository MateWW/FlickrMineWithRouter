import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PhotoListRoutingModule } from './photo-list-routing.module';
 
import { PhotoListComponent } from './photo-list.component';
import { PagingComponent } from './list/paging.component';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';


import { CommunicationService } from '../communication.service';
import { PhotoListService } from "./photo-list.service";
import { SearchService } from "./search/search.service";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    PhotoListRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PhotoListComponent,
    PagingComponent,
    ListComponent,
    SearchComponent
  ],
  providers:[
    CommunicationService,
    PhotoListService,
    SearchService
  ],
  exports:[
    PhotoListComponent
  ]
})
export class PhotoListModule { }
