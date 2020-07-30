import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PesoIdealPageRoutingModule } from './peso-ideal-routing.module';

import { PesoIdealPage } from './peso-ideal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PesoIdealPageRoutingModule
  ],
  declarations: [PesoIdealPage]
})
export class PesoIdealPageModule {}
