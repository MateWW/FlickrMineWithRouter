import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { SearchComponent } from './search.component';

import { SearchService } from "./search.service";
import { CommunicationService } from '../../communication.service';

class RouterStub {
  navigate(url) { return url; }
}

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        FormsModule,
        ReactiveFormsModule,
        HttpModule
      ],
      declarations: [ SearchComponent ],
      providers:[
        SearchService,
        CommunicationService,
        {provide: Router, useClass : RouterStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
