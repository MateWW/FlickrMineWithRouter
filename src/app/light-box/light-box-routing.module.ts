import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

import { LightBoxComponent } from './light-box.component';

const appRouting:Routes = [
    { path: 'details', component:  LightBoxComponent }
]


@NgModule({
    imports:[
        RouterModule.forChild(appRouting)
    ],
    exports:[
        RouterModule
    ]
})
export class LightBoxRoutingModule{}