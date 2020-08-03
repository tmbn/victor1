import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { isNullOrUndefined } from 'util';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  loginForm: FormGroup;
   error_messages = {  };

  
  nombre; 
  apellido;
  telefono;
  email;
  pass1;
  pass2;
  tipoPass='password';

  constructor(private auth:AuthService, private router: Router,public loadingController: LoadingController,)  { 
              
    
  }

  ngOnInit() {
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: '',
      message: 'Iniciando sesión',
     
    });
    await loading.present();

    
  }
  async Registrar() {
    this.presentLoading();
    this.auth.SingUpByEmail(this.email, this.pass1).then(res => {
      this.loadingController.dismiss();
      this.router.navigate(['/home']);      
      
    }).catch(error => {
      this.loadingController.dismiss();
      console.log(error);
    });
  }
  PassChecker(){
    
    this.tipoPass= this.tipoPass === 'text ' ? 'password' : ' text';
        
   }
   veriPass( ){
   this.checkDifferences(this.pass1,this.pass2) ;

   }
   iniciarRegistro(){
     // tslint:disable-next-line: max-line-length
     if(this.nombre===  '' || this.apellido===''|| this.pass1=== ''|| this.pass2 === ''|| this.telefono === ''){
       alert('Por favor complete todos los campos');
     }
     else{
      this.veriPass( );

     }
   }


   checkDifferences(text1, text2){
    if (text1.length && text2.length){
      var words1 = text1.split(' ');
      var words2 = text2.split(' ');
      // Busca la mayor coincidencia
      for(var i=(words1.length > words2.length ? words2.length : words1.length); i > 0; i--){
        for(var j=0; j<=words1.length - i; j++){
          var pattern = words1.slice(j, j+i).join(' ');
          var coincidence = text2.indexOf(pattern);
          if (coincidence >= 0){
            
            this.Registrar();
            // Coincidencia encontrada
            // Objeto diferencias de los textos anteriores a la coincidencia
            var differencesBefore = this.checkDifferences(words1.slice(0, j).join(' '),
                                        text2.substring(0, coincidence).trim());
            // Objeto diferencias de los textos posteriores a la coincidencia
            var differencesAfter = this.checkDifferences(words1.slice(j+i).join(' '),
                                        text2.substring(coincidence + pattern.length).trim());
            // Devuelve diferencias anteriores, posteriores y coincidencia actual
            return{
              differences1: differencesBefore.differences1.concat(differencesAfter.differences1),
              differences2: differencesBefore.differences2.concat(differencesAfter.differences2),
              coincidences: differencesBefore.coincidences.concat([pattern], differencesAfter.coincidences),
            }
          }
          else{
            
            alert('Contraseña incorrecta')
          }
        }
      }
    }
    // No se ha encontrado coincidencias
    return {
      differences1: text1.length ? [text1] : [],
      differences2: text2.length ? [text2] : [],
      coincidences: []
    };
   

  }
  
   checkDifferencesByLength(text1, text2, length){
    var words1 = text1.split(' ');
    if (words1.length < length) return null;
    
    var differences = [];
    for (var i=0; i+length<=words1.length; i++){
      var pattern = words1.slice(i, i+length).join(' ');
      if (text2.indexOf(pattern)<0) differences.push(pattern);
    }
    return differences;
  }
  

}
