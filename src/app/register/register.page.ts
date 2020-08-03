// register.page.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  validation_messages = {
    'nombre':[
      { type: 'required', message: 'Se requiere tu nombre.' },
      { type: 'pattern', message: 'Ingrese un nombre válido.' }

    ],
    'apellido':[
      { type: 'required', message: 'Se requiere tu nombre.' },
      { type: 'pattern', message: 'Ingrese un apellido válido.' }

    ],
    'telefono':[
      { type: 'required', message: 'Se requiere tu nombre.' },
      { type: 'minlength', message: 'Teléfono incorrecto' },
      { type: 'pattern', message: 'Ingrese un teléfono válido.' }
    ],
    'email': [
      { type: 'required', message: 'Se requiere un correo.' },
      { type: 'pattern', message: 'Ingrese un correo válido.' }
    ],
    'password': [
      { type: 'required', message: 'Se requiere una contraseña.' },
      { type: 'minlength', message: 'La contraseña tiene que ser de al menos 6 caracteres.' }
    ]
  };

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      nombre: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z_]+$')
      ])),
      apellido: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z_]+$')
      ])),
      telefono: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9+]+$'),
        Validators.minLength(7)

      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
    });
  }

  tryRegister(value) {
    this.authService.registerUser(value)
      .then(res => {
        console.log(res);
        this.errorMessage = "";
        this.successMessage = 'Tu cuenta ha sido creada. Por favor, inicie sesión haciendo click aqui. ';
        alert('Tu cuenta ha sido creada. Por favor, inicie sesión para continuar');
        this.navCtrl.navigateBack('');

      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = "";
      })
  }

  goLoginPage() {
    this.navCtrl.navigateBack('');
  }

  // checkDifferences(text1, text2){
  //   if (text1.length && text2.length){
  //     var words1 = text1.split(' ');
  //     var words2 = text2.split(' ');
  //     // Busca la mayor coincidencia
  //     for(var i=(words1.length > words2.length ? words2.length : words1.length); i > 0; i--){
  //       for(var j=0; j<=words1.length - i; j++){
  //         var pattern = words1.slice(j, j+i).join(' ');
  //         var coincidence = text2.indexOf(pattern);
  //         if (coincidence >= 0){
            
  //           this.tryRegister();
  //           // Coincidencia encontrada
  //           // Objeto diferencias de los textos anteriores a la coincidencia
  //           var differencesBefore = this.checkDifferences(words1.slice(0, j).join(' '),
  //                                       text2.substring(0, coincidence).trim());
  //           // Objeto diferencias de los textos posteriores a la coincidencia
  //           var differencesAfter = this.checkDifferences(words1.slice(j+i).join(' '),
  //                                       text2.substring(coincidence + pattern.length).trim());
  //           // Devuelve diferencias anteriores, posteriores y coincidencia actual
  //           return{
  //             differences1: differencesBefore.differences1.concat(differencesAfter.differences1),
  //             differences2: differencesBefore.differences2.concat(differencesAfter.differences2),
  //             coincidences: differencesBefore.coincidences.concat([pattern], differencesAfter.coincidences),
  //           }
  //         }
  //         else{
            
  //           alert('Contraseña incorrecta')
  //         }
  //       }
  //     }
  //   }
    // No se ha encontrado coincidencias
    // return {
    //   differences1: text1.length ? [text1] : [],
    //   differences2: text2.length ? [text2] : [],
    //   coincidences: []
    // };
   

  // }

}