import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AccountsComponent } from '../accounts/accounts.component';
import { EditComponent } from '../accounts/edit/edit.component';
import { ExtinguisherComponent } from '../extinguisher/extinguisher.component';
const routes: Routes = [ 
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path: 'clients',
        component: AccountsComponent,        
      },{
        path: 'clients/:id',
        component: EditComponent
      },
      {
        path: 'extinguisher',
        component: ExtinguisherComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
