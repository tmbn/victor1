import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestablecerKeyPageRoutingModule } from './restablecer-key-routing.module';

import { RestablecerKeyPage } from './restablecer-key.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestablecerKeyPageRoutingModule
  ],
  declarations: [RestablecerKeyPage]
})
export class RestablecerKeyPageModule {}
