import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LlistatPage } from './llistat.page';

const routes: Routes = [
  {
    path: '',
    component: LlistatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LlistatPageRoutingModule {}
