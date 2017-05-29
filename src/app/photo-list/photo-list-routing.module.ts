import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

import { PhotoListComponent } from './photo-list.component';

const appRouting:Routes = [
    { path: 'list', component:  PhotoListComponent }
]


@NgModule({
    imports:[
        RouterModule.forChild(appRouting)
    ],
    exports:[
        RouterModule
    ]
})
export class PhotoListRoutingModule{}