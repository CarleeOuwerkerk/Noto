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
import {JournalFilterPipe} from "./journal/journal-filter.pipe";
import { ThrowbackComponent } from './throwback/throwback.component';
import { ThrowbackDetailComponent } from './throwback/throwback-detail/throwback-detail.component';
import { ThrowbackStartComponent } from './throwback/throwback-start/throwback-start.component';
import { StartupComponent } from './startup/startup.component';
import { LoginFormComponent } from './startup/login-form/login-form.component';
import { SignupFormComponent } from './startup/signup-form/signup-form.component';
import { TextFilterPipe } from './journal/text-filter.pipe';

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
    EntryEditComponent,
    JournalFilterPipe,
    ThrowbackComponent,
    ThrowbackDetailComponent,
    ThrowbackStartComponent,
    StartupComponent,
    LoginFormComponent,
    SignupFormComponent,
    TextFilterPipe,
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
