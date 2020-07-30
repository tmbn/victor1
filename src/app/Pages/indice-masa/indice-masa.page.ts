import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';


@Component({
  selector: 'app-indice-masa',
  templateUrl: './indice-masa.page.html',
  styleUrls: ['./indice-masa.page.scss'],
})
export class IndiceMasaPage implements OnInit {
  Estatura;
  Peso ;
  Resultado;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  Calcular(){
    this.Resultado= this.Peso/ Math.pow(this.Estatura, 2);
    
  }
  recuperardatos(){
    this.auth.GetDatos()
  }

}
