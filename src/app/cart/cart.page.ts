import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

import { Pipe } from '@angular/core';

@Pipe({
    name: 'sort'
})

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
    selectedItems = [];
    total = 0;

  constructor(private cartService: CartService, private alert: AlertController) {

    }


  ngOnInit() {
      let items = this.cartService.getCart();
      let selected = {};
      for (let obj of items) {
          if (selected[obj.id]){
              selected[obj.id].count++;
          } else {
              selected[obj.id] = {...obj, count: 1};
          }
      }
      this.selectedItems = Object.keys(selected).map(key => selected[key]);
      console.log('items: ', this.selectedItems);
      this.total = this.selectedItems.reduce((a, b)=> a + (b.count * b.price), 0);

  }

  async openAlert(nombre, imagen) {
      const alert = await this.alert.create({
          header: 'Ubicacion de ' + nombre,
          message: imagen,
          buttons: ['Ok']
      });

      await alert.present();
  }

    remove(no) {
        (this.selectedItems).splice(no, 1);
        this.cartService.removeProduct(no);
    }
    refresh() {
    }


}
