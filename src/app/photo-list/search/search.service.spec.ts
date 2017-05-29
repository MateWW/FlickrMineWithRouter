import { TestBed, inject, async} from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';

import { SearchService } from './search.service';

import { CommunicationService } from '../../communication.service';

class RouterStub {
  navigate(url) { return url; }
}

describe('SearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpModule
      ],
      providers:[
        SearchService,
        CommunicationService,
        {provide: Router, useClass : RouterStub }
      ]
    });
  });

  it('should send text from input', async(inject([SearchService,CommunicationService], (service: SearchService, communication:CommunicationService) => {
    communication.getPhotosStream()
      .subscribe( (photos)=>{
        expect(typeof photos).toBe('object');
      });
    service.search("random text");
  })));
});
