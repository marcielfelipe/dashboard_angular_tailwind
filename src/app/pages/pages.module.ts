import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AtomsModule } from '../atoms/atoms.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MoleculesModule } from '../molecules/molecules.module';
import { OrganismsModule } from '../organisms/organisms.module';
import { ClientComponent } from './client/client.component';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    ClientComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule,
    OrganismsModule
  ]
})
export class PagesModule { }
