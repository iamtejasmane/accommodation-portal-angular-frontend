import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { HistoryComponent } from './history/history.component';
import { BookComponent } from './book/book.component';


@NgModule({
  declarations: [HistoryComponent, BookComponent],
  imports: [
    CommonModule,
    BookingRoutingModule
  ]
})
export class BookingModule { }
