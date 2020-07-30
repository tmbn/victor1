import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-restablecer-key',
  templateUrl: './restablecer-key.page.html',
  styleUrls: ['./restablecer-key.page.scss'],
})
export class RestablecerKeyPage implements OnInit {
  Correo;

  constructor(private Auth: AuthService) { }

  ngOnInit() {
  }
  async EnviarMail(){    
     this.Auth.resetpass(this.Correo);
     alert('Se han enviado un correo de reseteo');
    }



}
