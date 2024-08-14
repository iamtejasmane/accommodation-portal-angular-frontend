import { CityListComponent } from './city/city-list/city-list.component';
import { StateAddComponent } from './state/state-add/state-add.component';
import { StateListComponent } from './state/state-list/state-list.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { RoomTypeAddComponent } from './room-type/room-type-add/room-type-add.component';
import { RoomTypeListComponent } from './room-type/room-type-list/room-type-list.component';
import { PropertyTypeAddComponent } from './property-type/property-type-add/property-type-add.component';
import { PropertyTypeListComponent } from './property-type/property-type-list/property-type-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './admins/signin/signin.component';
import { PropertyAddComponent } from './property/property-add/property-add.component';
import { CityAddComponent } from './city/city-add/city-add.component';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'property-type-list', component: PropertyTypeListComponent },
  { path: 'property-type-add', component: PropertyTypeAddComponent },
  { path: 'room-type-list', component: RoomTypeListComponent },
  { path: 'room-type-add', component: RoomTypeAddComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'property-list', component: PropertyListComponent },
  { path: 'property-add', component: PropertyAddComponent },
  { path: 'state-list', component: StateListComponent },
  { path: 'state-add', component: StateAddComponent },
  { path: 'city-add', component: CityAddComponent },
  { path: 'city-list', component: CityListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
