import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-dieta',
  templateUrl: './dieta.page.html',
  styleUrls: ['./dieta.page.scss'],
})
export class DietaPage implements OnInit {

  constructor(private menuControler:MenuController) { }

  ngOnInit() {
  }
  OpenMenu()
{
  this.menuControler.toggle();
}
}
