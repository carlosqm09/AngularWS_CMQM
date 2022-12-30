import { UnicornsComponent } from './unicorns.component';
import { NgModule } from "@angular/core";
import {RouterModule, Routes } from "@angular/router";

const unicornsRoute:Routes = [
    {
        path: '',
        component: UnicornsComponent,
        data:{
            title: 'Unicorns'
        }
    }
]

@NgModule({
    imports: [RouterModule.forChild(unicornsRoute)],
    exports: [RouterModule]
})

export class UnicornsRouteModule{}