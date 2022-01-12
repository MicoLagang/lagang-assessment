import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesOfferedComponent } from './services-offered.component';

const routes: Routes = [{ path: '', component: ServicesOfferedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesOfferedRoutingModule { }
