import { MoleculesModule } from './../molecules/molecules.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AppRoutingModule } from '../app-routing.module';
import { AtomsModule } from '../atoms/atoms.module';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    NavBarComponent,
    LoginFormComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    AtomsModule,
    MoleculesModule
  ],
  exports: [
    NavBarComponent,
    LoginFormComponent,
    SidebarComponent
  ]
})
export class OrganismsModule { }
