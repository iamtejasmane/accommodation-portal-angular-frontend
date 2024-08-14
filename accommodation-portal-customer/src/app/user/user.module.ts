import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SaveComponent } from './save/save.component';
import { TripListComponent } from './trip-list/trip-list.component';


@NgModule({
  declarations: [SaveComponent, TripListComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
