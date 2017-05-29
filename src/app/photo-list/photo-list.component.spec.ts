import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { PhotoListComponent } from './photo-list.component';
import { PagingComponent } from './list/paging.component';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component'

import { PhotoListService } from './photo-list.service';
import { CommunicationService } from "../communication.service";
import { SearchService } from "./search/search.service";

class RouterStub {
  navigate(url) { return url; }
}

describe('PhotoListComponent', () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ 
        PhotoListComponent,
        PagingComponent,
        ListComponent,
        SearchComponent
      ],
      providers: [
        PhotoListService,
        CommunicationService,
        SearchService,
        {provide: Router, useClass : RouterStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
