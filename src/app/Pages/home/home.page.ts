import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private menuControler:MenuController) { }

  ngOnInit() {
  }
  OpenMenu()
{
  this.menuControler.toggle();
}
}
