import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { promise, error } from 'protractor';
import { resolve } from 'url';
import { Router } from '@angular/router';
import { auth } from 'firebase';



// import {FirebaseAuthentication} from '@ionic-native/firebase-authentication/ngx';
import { AngularFirestore } from '@angular/fire/firestore';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public activarMenu: Boolean = false;
  verificationID: string = '';
  public NombreUsuario: string;
  public UserId: string;
  Estatura: string;
  Peso: string
  constructor(private AFauth: AngularFireAuth,
              private router: Router,
              private db: AngularFirestore)
              {}
  login(email: string, password: string) {

    return new Promise((resolve, rejected) => {
      this.AFauth.auth.signInWithEmailAndPassword(email, password).then(user => {
        const userIdGet= user.user.uid;
        this.UserId = userIdGet;
        resolve(user);
        this.activarMenu = true;
      }).catch(err => rejected(err));
    });
  }
  SingUpByEmail( email: string, password: string) {
    return new Promise((Resuelto, Rechazado) => {
      this.AFauth.auth.createUserWithEmailAndPassword(email, password).then(userSingUp => {
        const userid = userSingUp.user.uid;
       
        Resuelto(userSingUp);
      }).catch(err => { Rechazado(err)
      alert(err)}
       );
    });

  }
  logout() {
    this.AFauth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
      this.activarMenu = false;
    });
  }

  SingUpByPhone(nameUser: string, email: string, password: string) {
    return new Promise((Resuelto, Rechazado) => {
      this.AFauth.auth.createUserWithEmailAndPassword(email,password).then(userSingUp => {
        const userid = userSingUp.user.uid;
        this.db.collection('users').doc(userid).set({
          name : nameUser,
          uid: userid,
        });
        this.NombreUsuario = nameUser ;
        Resuelto(userSingUp);
      }).catch(err => Rechazado(err));
    });
  }
  resetpass(correo:string){
    this.AFauth.auth.sendPasswordResetEmail(correo);
  }

  GetDatos(){
   console.log('SinDatos')
   
    
  }

}
