import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SigninComponent } from './admins/signin/signin.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { PropertyTypeAddComponent } from './property-type/property-type-add/property-type-add.component';
import { PropertyTypeListComponent } from './property-type/property-type-list/property-type-list.component';
import { RoomTypeListComponent } from './room-type/room-type-list/room-type-list.component';
import { RoomTypeAddComponent } from './room-type/room-type-add/room-type-add.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { PropertyAddComponent } from './property/property-add/property-add.component';
import { StateListComponent } from './state/state-list/state-list.component';
import { StateAddComponent } from './state/state-add/state-add.component';
import { CityListComponent } from './city/city-list/city-list.component';
import { CityAddComponent } from './city/city-add/city-add.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    PropertyTypeAddComponent,
    PropertyTypeListComponent,
    RoomTypeListComponent,
    RoomTypeAddComponent,
    UserListComponent,
    PropertyListComponent,
    PropertyAddComponent,
    StateListComponent,
    StateAddComponent,
    CityListComponent,
    CityAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
