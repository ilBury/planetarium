import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ViewComponent } from './components/view/view.component';
import { MainPageModule } from './main-page.module';
import { CommonModule } from '@angular/common';


const routes: Routes = [
 {
  path: '',
  component: ViewComponent,
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
