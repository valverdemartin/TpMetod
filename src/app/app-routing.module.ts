import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NoIdentityGuardService } from './helpers/no-identity-guard.service';
import { AuthGuardService } from './helpers/auth-guard.service';


const routes: Routes = [
  /*{
    path:'**',
    redirectTo:'login',   
    pathMatch:'full'     
  },*/
  {
    path:'login',
    component:LoginComponent,
    canActivate:[NoIdentityGuardService]
  },
  {
    path:'home',
    loadChildren:'./pages/layout/layout.module#LayoutModule',
    canActivate:[AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
