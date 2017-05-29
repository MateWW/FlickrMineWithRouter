import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { LightBoxDetailsComponent } from './light-box-details.component';

import { LightBoxService } from './light-box.service';
import { CommunicationService } from "../communication.service";

import { Router } from '@angular/router';

class RouterStub {
  navigate(url) { return url; }
}

describe('LightBoxDetailsComponent', () => {
  let component: LightBoxDetailsComponent;
  let fixture: ComponentFixture<LightBoxDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      declarations: [ LightBoxDetailsComponent ],
      providers:[
        LightBoxService,
        CommunicationService,
        {provide: Router, useClass : RouterStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightBoxDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
