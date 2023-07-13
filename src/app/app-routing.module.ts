import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { SecureComponent } from './secure/secure.component';
import { RegisterComponent } from './public/register/register.component';
import { PublicComponent } from './public/public.component';
import { DashboardComponent } from './secure/dashboard/dashboard.component';
import { UsersComponent } from './secure/users/users.component';

const routes: Routes = [
  {
    path: '', component: SecureComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'users', component: UsersComponent}
    ]

  },
  {
    path: '',
    component: PublicComponent,
    children: [
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
