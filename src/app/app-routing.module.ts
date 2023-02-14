import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ViewComponent } from './main-page/components/view/view.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'planetarium',
    pathMatch: 'full'
  },
  {
    path: 'planetarium',
    loadChildren: () => import('./main-page/main-page.module').then(m => m.MainPageModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
