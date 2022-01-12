import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologyStackRoutingModule } from './technology-stack-routing.module';
import { TechnologyStackComponent } from './technology-stack.component';


@NgModule({
  declarations: [
    TechnologyStackComponent
  ],
  imports: [
    CommonModule,
    TechnologyStackRoutingModule
  ]
})
export class TechnologyStackModule { }
