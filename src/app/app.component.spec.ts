import { TestBed, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http'
import { Router } from '@angular/router';


import { PhotoListModule } from './photo-list/photo-list.module';
import { LightBoxModule } from "./light-box/light-box.module";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

class RouterStub {
  navigate(url) { return url; }
}


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        PhotoListModule,
        LightBoxModule,
        AppRoutingModule,
        HttpModule     
      ],
      declarations: [
        AppComponent
      ],
      providers: [{provide: Router, useClass : RouterStub }]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Flickr Gallery');
  }));
});
