import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PreLoginComponent } from './pre-login.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    {
      path: '', component: PreLoginComponent 
    },
    {
      path: 'about', component: AboutComponent 
    }
  ];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PreLoginRoutingModule { }
