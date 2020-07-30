import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaDoctoresPageRoutingModule } from './lista-doctores-routing.module';

import { ListaDoctoresPage } from './lista-doctores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaDoctoresPageRoutingModule
  ],
  declarations: [ListaDoctoresPage]
})
export class ListaDoctoresPageModule {}
