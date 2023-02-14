import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ViewComponent } from './components/view/view.component';
import { SessionsComponent } from './components/sessions/sessions.component';
import { BookingPageComponent } from './components/booking-page/booking-page.component';


const routes: Routes = [
 {
  path: '',
  redirectTo: 'view',
  pathMatch: 'full'
 },
 {
  path: 'view',
  component: ViewComponent,
 },
 {
  path: 'sessions',
  component: SessionsComponent,

 },
 {
  path: 'booking',
  component: BookingPageComponent,
 }
];


@NgModule({
  declarations: [

  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class MainPageRoutingModule { }
