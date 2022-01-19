import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormulariPageRoutingModule } from './formulari-routing.module';

import { FormulariPage } from './formulari.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormulariPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FormulariPage]
})
export class FormulariPageModule {}
