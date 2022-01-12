import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesOfferedRoutingModule } from './services-offered-routing.module';
import { ServicesOfferedComponent } from './services-offered.component';


@NgModule({
  declarations: [
    ServicesOfferedComponent
  ],
  imports: [
    CommonModule,
    ServicesOfferedRoutingModule
  ]
})
export class ServicesOfferedModule { }
