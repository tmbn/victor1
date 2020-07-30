import { Component, OnInit, ViewChild } from '@angular/core';
import { timer } from 'rxjs';
import { timingSafeEqual } from 'crypto';
import { AlgoritmoService } from '../../Services/algoritmo.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IonContent } from '@ionic/angular';
import { isNumber } from 'util';







@Component({
  selector: 'app-prediagnostico',
  templateUrl: './prediagnostico.page.html',
  styleUrls: ['./prediagnostico.page.scss'],
  animations: [
    trigger('AnimHeader', [
      state('opaque', style({
        opacity: 1,

      })),
      state('transparent', style({
        opacity: 0
      })),
      transition('opaque => transparent', animate('500ms ease-in')),
      transition('transparent => opaque', animate('500ms ease-out'))
    ]),
    trigger('AnimAlgoritmo', [
      state('opaque', style({
        opacity: 1,
      })),
      state('transparent', style({
        opacity: 0
      })),
      transition('opaque => transparent', animate('100ms ease-in')),
      transition('transparent => opaque', animate('500ms ease-out'))
    ]),
  ]
})
export class PrediagnosticoPage implements OnInit {
  Header = true;
  Textoprincipal: any = '¡Hola! Puedo ayudarte a descubrir que está pasando. Empecemos buscando tu síntoma.';
  BotonIni = true;
  Buscador = false;
  sintomasPanel= false;
  PosiblesSintomas=true;
  posiblesSintomasAnim = 'opaque';

  AnimsTransform = 'opaque';
  AnimAlgoritmo = 'opaque';
  Sintomas: any[] = [];
  FiltroSelect: string = '';
  myVal;
  textoBuscar: string = '';
  Buscar = false;
  Filtro = false;
  message: string;

  Preguntas: Observable<any[]> ;

  PreguntasRegreso = [];

  PreguntasDiv=false;
  PreguntaAnte= 'transparent';
  ValorRetorno;
  PreguntaRetorno: any;

  
  constructor(public Algoritmoser: AlgoritmoService, private router: Router) { }
  @ViewChild(IonContent, {static: true}) content: IonContent;
  

  ngOnInit() {
    this.Algoritmoser. getSintomas().subscribe( Sin => {
      console.log(Sin);
      this.Sintomas = Sin;
     
    });
  }
  IniciarEvaluacion(){
    this.Buscador = true;
    this.posiblesSintomasAnim = 'transparent';
    this.AnimsTransform = 'transparent' ;
    this. AnimAlgoritmo = 'transparent' ;
    timer(1000).subscribe(() => {
      this.Header = false;
      this.AnimAlgoritmo = 'opaque';
      this.Textoprincipal = 'Busca un sintoma';
      this.sintomasPanel = true;
      this.PosiblesSintomas = false;
      this.BotonIni = false;
    });
  }
  SelectSintoma(num: number){
    if(num===1){
      this.textoBuscar = 'Sistema';
    }
    if(num===2){
      this.textoBuscar = 'Pulmomes';
    }
    if(num===3){
      this.textoBuscar = 'Abdomen';
    }
    if(num===4){
      this.textoBuscar = 'Pecho';
    }
    if(num===5){
      this.textoBuscar = 'Espalda';
    }
    this.IniciarEvaluacion()

  }
  buscar( event) {
    this.textoBuscar = event.detail.value;
 
    if(this.textoBuscar === '') {
     this.Buscar = false;
    }
    else {
      this.Buscar = true;
    }
   }
   itemClicked(Title, id) {
    this.myVal = Title;
    this.Algoritmoser.openStep2(Title, id);
    console.log(this.myVal);
    this.Preguntas =  this.Algoritmoser.getPreguntas();

    this.PreguntasDiv=true;
    this.Buscador=false;
    this.sintomasPanel=false;
    this.content.scrollToPoint(0,50,500);
  //  console.log( this.Preguntas.toString());
    // this.Textoprincipal= this.PreguntaOrincipal.slice(0, 7).toString();
    // console.log( this.Textoprincipal);
  }

  ButtonSi(pregunta, diagnostico, si){
    if(si===0){
      this.content.scrollToPoint(0, 50, 500);
    }else{
    const ScrollTO = si * 680 + 50;
    this.Algoritmoser.OpenStep3(diagnostico);
    console.log(si);
    this.PreguntaAnte = 'opaque';
    console.log(si)
    this.ValorRetorno= si;
    
    this.PreguntasRegreso.unshift(pregunta+ '\n ' + 'Respuesta:'+' '+ 'SI');
    console.log(this.PreguntasRegreso);
    
    this.PreguntaRetorno = this.PreguntasRegreso.slice(0,1);
   
    
    // tslint:disable-next-line: deprecation
    if (!isNumber(si) ){
      this.router.navigate([si]);
   }else{
    this.content.scrollToPoint(0, ScrollTO, 500);
    console.log(ScrollTO);
    }
   }
  }
  

  ButtonNo(pregunta, no){
    if(no===0){
      this.content.scrollToPoint(0, 50, 500);
      
    }else{
      const ScrollTO = no * 680 + 50;
      this.content.scrollToPoint(0, ScrollTO, 500);
      this.PreguntaAnte = 'opaque';
      console.log(no)
      this.ValorRetorno= no;
      
      this.PreguntasRegreso.unshift(pregunta+ "\n" + 'Respuesta:'+' '+ 'NO');
      console.log(this.PreguntasRegreso);
      
      this.PreguntaRetorno = this.PreguntasRegreso.slice(0,1);
    }
  }


}
