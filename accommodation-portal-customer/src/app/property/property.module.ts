import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyRoutingModule } from './property-routing.module';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyFilterComponent } from './property-filter/property-filter.component';
import { PropertyInvoiceComponent } from './property-invoice/property-invoice.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { PropertyMapComponent } from './property-map/property-map.component';
import { PropertyAmenitiesComponent } from './property-amenities/property-amenities.component';
import { PropertyImageComponent } from './property-image/property-image.component';


@NgModule({
  declarations: [PropertyListComponent, PropertyFilterComponent, PropertyInvoiceComponent, PropertyDetailsComponent, PropertyMapComponent, PropertyAmenitiesComponent, PropertyImageComponent],
  imports: [
    CommonModule,
    PropertyRoutingModule
  ]
})
export class PropertyModule { }
