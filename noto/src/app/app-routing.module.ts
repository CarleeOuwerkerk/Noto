import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {JournalComponent} from "./journal/journal.component";
import {JournalStartComponent} from "./journal/journal-start/journal-start.component";
import {EntryDetailComponent} from "./journal/entry-detail/entry-detail.component";
import {EntryEditComponent} from "./journal/entry-edit/entry-edit.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/journal', pathMatch: 'full' },
  { path: 'journal', component: JournalComponent, children: [
    { path: '', component: JournalStartComponent },
    { path: 'new', component: EntryEditComponent },
    { path: ':id', component: EntryDetailComponent },
    { path: ':id/edit', component: EntryEditComponent }
  ] }
  // ,
  // { path: 'throwback', component: ThrowbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
