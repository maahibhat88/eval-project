import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreLoginComponent } from './pre-login.component';
import { PreLoginRoutingModule } from './pre-login-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { SharedModule, } from '../shared/shared.module';



@NgModule({
  declarations: [
    PreLoginComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    PreLoginRoutingModule,
    NgbModule,
    SharedModule
  ]
})
export class PreLoginModule { }
