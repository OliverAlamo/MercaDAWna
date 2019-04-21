import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Catalogo',
      url: '/catalog',
      icon: 'list'
    },
      {
          title: 'Lista de Compra',
          url: '/cart',
          icon: 'cart'
      },
      {
          title: 'Quienes Somos',
          url: '/info',
          icon: 'finger-print'
      },
      {
          title: 'Contacto',
          url: '/register',
          icon: 'paper-plane'
      },

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
