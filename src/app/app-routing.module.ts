import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CreateUserComponent } from './create-user/create-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'create', component: CreateUserComponent },
  { path: 'list-users', component: ListUserComponent },
  { path: 'update-user/:id', component: EditUserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'landing', loadChildren: () => import('./components/pages/landing/landing.module').then(m => m.LandingModule), canActivate: [AuthGuard] },
  { path: 'profile', loadChildren: () => import('./components/pages/profile/profile.module').then(m => m.ProfileModule), canActivate: [AuthGuard] },
  { path: 'services-offered', loadChildren: () => import('./components/pages/services-offered/services-offered.module').then(m => m.ServicesOfferedModule) },
  { path: 'contact-information', loadChildren: () => import('./components/pages/contact-information/contact-information.module').then(m => m.ContactInformationModule) },
  { path: 'technology-stack', loadChildren: () => import('./components/pages/technology-stack/technology-stack.module').then(m => m.TechnologyStackModule) },
  { path: 'admin', loadChildren: () => import('./components/pages/admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }