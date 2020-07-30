import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrediagnosticoPageRoutingModule } from './prediagnostico-routing.module';

import { PrediagnosticoPage } from './prediagnostico.page';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrediagnosticoPageRoutingModule,
    PipesModule
  ],
  declarations: [PrediagnosticoPage]
})
export class PrediagnosticoPageModule {}
