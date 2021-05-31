import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostLoginComponent } from './post-login.component';
import { LightboxModule } from 'ngx-lightbox';
import { PostLoginRoutingModule } from './post-login-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PostLoginComponent
  ],
  imports: [
    CommonModule,
    PostLoginRoutingModule,
    LightboxModule,
    SharedModule
  ]
})
export class PostLoginModule { }
