import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { JournalComponent } from './journal/journal.component';
import { EntryListComponent } from './journal/entry-list/entry-list.component';
import { EntryItemComponent } from './journal/entry-item/entry-item.component';
import { EntryCalendarComponent } from './journal/entry-calendar/entry-calendar.component';
import { EntryDetailComponent } from './journal/entry-detail/entry-detail.component';
import {DropdownDirective} from "./directives/dropdown.directive";
import {JournalService} from "./journal/journal.service";
import {AppRoutingModule} from "./app-routing.module";
import { JournalStartComponent } from './journal/journal-start/journal-start.component';
import { EntryEditComponent } from './journal/entry-edit/entry-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JournalComponent,
    EntryListComponent,
    EntryItemComponent,
    EntryCalendarComponent,
    EntryDetailComponent,
    DropdownDirective,
    JournalStartComponent,
    EntryEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
