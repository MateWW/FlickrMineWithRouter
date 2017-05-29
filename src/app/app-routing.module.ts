import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

const appRouting:Routes = [
    { path: '', redirectTo: '/list', pathMatch:"full" },
    { path: '**', redirectTo: '/list', pathMatch:"full" }
]


@NgModule({
    imports:[
        RouterModule.forRoot(appRouting)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}