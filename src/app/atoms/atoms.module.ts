import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { AvatarComponent } from './avatar/avatar.component';
import { InputIconComponent } from './input-icon/input-icon.component';
import { LinkComponent } from './link/link.component';
import { LogoComponent } from './logo/logo.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    ButtonComponent,
    AvatarComponent,
    InputIconComponent,
    LinkComponent,
    LogoComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  exports:[
    ButtonComponent,
    AvatarComponent,
    InputIconComponent,
    LinkComponent,
    LogoComponent,
  ]
})
export class AtomsModule { }
