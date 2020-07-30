import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DietasModalPageRoutingModule } from './dietas-modal-routing.module';

import { DietasModalPage } from './dietas-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DietasModalPageRoutingModule
  ],
  declarations: [DietasModalPage]
})
export class DietasModalPageModule {}
