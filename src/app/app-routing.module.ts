import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  {
    path:'unicorns',
    loadChildren: ()=> import('./entities/unicorns/unicorns.module').then(m=> m.UnicornsModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path:'welcome',
    loadChildren: ()=> import('./pages/welcome/welcome.module').then(m=> m.WelcomeModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path:'login',
    loadChildren: ()=> import('./pages/login/login.module').then(m=> m.LoginModule)
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
