import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoadingController } from '@ionic/angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email;
  pass;
  tipoPass='password';

  showPassword = false;
  passwordToggleIcon = 'eye';

  constructor(private auth:AuthService, private router: Router,public loadingController: LoadingController,  private fb: Facebook, private fireAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  togglePassword():void {
    this.showPassword=!this.showPassword;

    if(this.passwordToggleIcon ==='eye'){
      this.passwordToggleIcon='eye-off'
    }else{
      this.passwordToggleIcon='eye';
    }
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: '',
      message: 'Iniciando sesión',
     
    });
    await loading.present();

    
  }
  async quitLoading() {
    const loading = await this.loadingController.dismiss()
   
     
    
  

    
  }
  async Login() {
   const lg= await this.loadingController.create({
      cssClass: '',
      message: 'Iniciando sesión',
     
    });
   await lg.present();
   if(this.pass=== 'amatista13'){
    this.auth.login( 'iokcare@gmail.com', 'amatista13').then(res => {
      
      lg.dismiss();
      this.router.navigate(['/home']);      
      
    }).catch(error => {alert('Usuario y/o contraseña equivocada')
     lg.dismiss()}    
    );
   }else{
     alert('Usuario y/o contraseña equivocada');
   }
  
  }
  CrearCuentabtn(){
    this.router.navigate(['/registro'])
  }
  LoginTemporal(){
    this.router.navigate(['/home'])
  }
  PassCheckerhold(){
    
  //  this.tipoPass= this.tipoPass === 'text ' ? 'password' : ' text';
   if(this.tipoPass==='text'){
     this.tipoPass='password'
   }
   
  }
  PassCheckerend(){
    
    //  this.tipoPass= this.tipoPass === 'text ' ? 'password' : ' text';
     if(this.tipoPass==='password'){
       this.tipoPass='text'
     }
     
    }
  async loginfb() {

    this.fb.login(['email'])
      .then((response: FacebookLoginResponse) => {
        this.onLoginSuccess(response);
        console.log(response.authResponse.accessToken);
      }).catch((error) => {
        console.log(error)
        alert('error:' + error)
      });
  }
  onLoginSuccess(res: FacebookLoginResponse) {
    // const { token, secret } = res;
    const credential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
    this.fireAuth.auth.signInWithCredential(credential)
      .then((response) => {
        this.router.navigate(["/home"]);
        this.quitLoading()
      })

  }
  onLoginError(err) {
    console.log(err);
  }




}
