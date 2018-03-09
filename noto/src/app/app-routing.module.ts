import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {JournalComponent} from "./journal/journal.component";
import {JournalStartComponent} from "./journal/journal-start/journal-start.component";
import {EntryDetailComponent} from "./journal/entry-detail/entry-detail.component";
import {EntryEditComponent} from "./journal/entry-edit/entry-edit.component";
import {ThrowbackComponent} from "./throwback/throwback.component";
import {ThrowbackDetailComponent} from "./throwback/throwback-detail/throwback-detail.component";
import {ThrowbackStartComponent} from "./throwback/throwback-start/throwback-start.component";
import {StartupComponent} from "./startup/startup.component";
import {LoginFormComponent} from "./startup/login-form/login-form.component";
import {SignupFormComponent} from "./startup/signup-form/signup-form.component";
import {AuthGuard} from "./startup/auth-guard.service";
import {EntryCalendarComponent} from "./journal/entry-calendar/entry-calendar.component";

const appRoutes: Routes = [
  // {path: '', redirectTo: '/journal', pathMatch: 'full'},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: 'journal', component: JournalComponent, canActivate: [AuthGuard], children: [
    {path: '', component: JournalStartComponent, canActivate: [AuthGuard]},
    {path: 'new', component: EntryEditComponent, canActivate: [AuthGuard]},
    {path: ':id', component: EntryDetailComponent, canActivate: [AuthGuard]},
    {path: ':id/edit', component: EntryEditComponent, canActivate: [AuthGuard]}]
  },
  // {
  //   path: 'calendar', component: EntryCalendarComponent, canActivate: [AuthGuard]
  // },
  {
    path: 'throwback', component: ThrowbackComponent, canActivate: [AuthGuard], children: [
    {path: '', component: ThrowbackStartComponent, canActivate: [AuthGuard]},
    {path: ':id', component: ThrowbackDetailComponent, canActivate: [AuthGuard]}]
  },
  {path: 'login', component: LoginFormComponent},
  {path: 'signup', component: SignupFormComponent}
  // { path: 'startup', component: StartupComponent, children: [
  //   { path: 'login', component: LoginFormComponent },
  // {path: 'signup', component: SignupFormComponent}
  // ] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
