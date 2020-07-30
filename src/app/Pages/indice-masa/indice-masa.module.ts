import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndiceMasaPageRoutingModule } from './indice-masa-routing.module';

import { IndiceMasaPage } from './indice-masa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndiceMasaPageRoutingModule
  ],
  declarations: [IndiceMasaPage]
})
export class IndiceMasaPageModule {}
