import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { IPhotoListElement, IPhotoListElementDetails, IPhotoUrls, IPhotoPrepared } from './interfaces';

import { RequestMaker } from './request-maker/request-maker';

@Injectable()
export class CommunicationService {

  private requestMaker:RequestMaker;

  constructor( private http:Http , private router:Router ) {
    this.requestMaker = new RequestMaker( http );
  }

  private foundPhotos:[IPhotoListElement] = <[IPhotoListElement]>[];
  private photosStream = new Subject();

 

  searchPhotos( text:string ){
    this.requestMaker.getPhotosList( text )
      .subscribe( (list:[IPhotoListElement]) => {
        this.foundPhotos = list;
        this.photosStream.next(<[IPhotoPrepared]>this.preparePhotoList( list ));
      });
  }

  private preparePhotoList( list:[IPhotoListElement] ){
    let preparedList:[IPhotoPrepared] = <[IPhotoPrepared]>[];
    
    for( let photo of list )
    {
      let urls:IPhotoUrls = this.getPhotoUrl(photo);

      if( urls.id == 0 || urls.orginalUrl.length == 0 || urls.thumbnailUrl.length == 0 )
        continue;
      
      let preparedPhoto:IPhotoPrepared = {
          photoElement: photo,
          url: urls
      }
      preparedList.push(preparedPhoto);
    }

    return preparedList;
  }

  getPhotosStream(){
    return this.photosStream.startWith(this.foundPhotos);
  }







  private LightBoxStream = new Subject();
  private photo:IPhotoListElement;

  showLightBox( photo:IPhotoListElement ){
    this.lightBoxRedirect();
    this.photo = photo;
    this.LightBoxStream.next( photo );
  }

  getLightBoxStream(){
    if(!this.photo)
      return this.LightBoxStream.asObservable();
    
    return this.LightBoxStream.startWith(this.photo); 
  }

  private lightBoxRedirect(){
    this.router.navigate(["/details"])
  }

  lightBoxClose(){
    this.router.navigate(["/list"]);
  }





  getPhotoUrl( element:IPhotoListElement ){
    return this.requestMaker.getPhotoUrl(element);
  }

  getPhotoDetails( element:IPhotoListElement ){
    return this.requestMaker.getPhotoDetails(element); 
  }
}
