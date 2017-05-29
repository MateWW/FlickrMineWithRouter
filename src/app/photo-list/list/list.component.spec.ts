import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';

import { ListComponent } from './list.component';

import { PhotoListService } from '../photo-list.service';
import { CommunicationService } from "../../communication.service";

class RouterStub {
  navigate(url) { return url; }
}


describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpModule
      ],
      declarations: [ 
        ListComponent 
      ],
      providers: [
        PhotoListService,
        CommunicationService,
        {provide: Router, useClass : RouterStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
