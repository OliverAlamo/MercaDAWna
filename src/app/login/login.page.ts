import { Component, OnInit } from '@angular/core';
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    username: string = "";
    password: string = "";
  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async login(){
    const { username, password } = this
      try{
        const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@codedamn.com', password)

      }catch(err){
        console.dir(err);
        if(err.code === "auth/user-not-found"){
          console.log("USer not found");
        }
      }
  }

}
