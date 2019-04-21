import { Component, OnInit } from '@angular/core';
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth';
import { auth } from 'firebase/app';

//import {homedir} from 'os';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  username: string = "";
    password: string = "";
    cpassword: string = "";
  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async register() {
    const { username, password, cpassword } = this;
    if(password !== cpassword) {
      return console.error("Las contraseñas no coinciden")
    }
    try{
        const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@codedamn.com', password);
        //this.router.navigateByUrl('/home');

    } catch(error){
        console.dir(error);
    }
  }



}
