import { Component, OnInit } from '@angular/core';
import { AlgoritmoService } from '../../Services/algoritmo.service';


@Component({
  selector: 'app-diagnostico',
  templateUrl: './diagnostico.page.html',
  styleUrls: ['./diagnostico.page.scss'],
})
export class DiagnosticoPage implements OnInit {
  DiagnosticoFinal;

  constructor(private Algor: AlgoritmoService) { }

  ngOnInit() {
    this.DiagnosticoFinal= this.Algor.Diagnos;
  }

}
