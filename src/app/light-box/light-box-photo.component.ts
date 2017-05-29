import { Component, OnInit } from '@angular/core';
import { IPhotoUrls } from "../interfaces";
import { LightBoxService } from './light-box.service';

@Component({
  selector: 'light-box-photo',
  template: `
    <div class="lightBox__photo">
      <div *ngIf="url; else loader">
        <img [src]="url" alt="Photo"/>
      </div>
      <ng-template #loader><div class="loading"></div></ng-template>
    </div>
  `,
  styles: [`
    .lightBox__photo{
        padding: 1rem 0;
        width: 100%;
        display:flex;
        justify-content:center;
        align-items:center;
    }
  `]
})
export class LightBoxPhotoComponent implements OnInit {

  url:string
  constructor( private lightBox:LightBoxService ) { }

  ngOnInit() {
    this.lightBox.getPhotoUrlStream()
      .subscribe( ( photoUrls:IPhotoUrls) =>{
          this.url = photoUrls.orginalUrl;
      })
  }

}
