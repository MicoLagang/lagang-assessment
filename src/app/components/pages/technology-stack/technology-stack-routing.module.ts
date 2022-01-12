import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologyStackComponent } from './technology-stack.component';

const routes: Routes = [{ path: '', component: TechnologyStackComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnologyStackRoutingModule { }
