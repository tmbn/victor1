import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlgoritmoService {
  StepPageName: string;
  id: number;
  Diagnos: string;

  constructor(private http: HttpClient) { }

  getSintomas(){
    return this.http.get<any>('/assets/Prediagnostico/Sintomas.json');
  }
  getPreguntas(){
    return this.http.get<any[]>('/assets/Prediagnostico/Paso2/' + this.id + '.json');
  }

  openStep2(TitleName, id) {
    this.StepPageName = TitleName;
    this.id = id;
  }
  OpenStep3(Diagnostico){
    this.Diagnos = Diagnostico;

  }
}
