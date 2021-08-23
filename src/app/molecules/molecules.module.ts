import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../organisms/nav-bar/nav-bar.component';
import { AtomsModule } from '../atoms/atoms.module';
import { UserDropdownComponent } from './user-dropdown/user-dropdown.component';
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    UserDropdownComponent,
    SidebarItemComponent
  ],
  imports: [
    CommonModule,
    AtomsModule,
    AppRoutingModule
  ],
  exports: [
    SidebarItemComponent,
    UserDropdownComponent
  ]
})
export class MoleculesModule { }
