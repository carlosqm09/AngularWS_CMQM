import { LoginComponent } from './login.component';
import { NgModule } from "@angular/core";
import {RouterModule, Routes } from "@angular/router";

const loginRoute:Routes = [
    {
        path: '',
        component: LoginComponent,
        data:{
            title: 'Login'
        }
    }
]

@NgModule({
    imports: [RouterModule.forChild(loginRoute)],
    exports: [RouterModule]
})

export class LoginRouteModule{}