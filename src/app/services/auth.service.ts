import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../shared/user.class';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogged:any = false;
  constructor(public afAuth: AngularFireAuth, private toastr: ToastrService) { 
    afAuth.authState.subscribe(user => (this.isLogged = user));
  }
  //Login
  async onLogin(user: User){
    try{
      return await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    } catch (error){
      this.toastr.error(error, '¡Atención!');
      console.log('Error en login', error);
    }
  }
  //Regitro
  async onRegister(user: User){
    try{
      return await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    } catch (error){
      this.toastr.error(error, '¡Atención!');
      console.log('Error en registro', error);
    }
  }

}
