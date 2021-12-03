import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LlistatPageRoutingModule } from './llistat-routing.module';

import { LlistatPage } from './llistat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LlistatPageRoutingModule
  ],
  declarations: [LlistatPage]
})
export class LlistatPageModule {}
