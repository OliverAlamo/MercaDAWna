import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.scss'],
})
export class CatalogPage implements OnInit {
    cart = [];
    items = [];
    sliderConfig = {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 1.6
    }

  constructor(private cartService: CartService, private router: Router) { }

    ngOnInit() {
        this.cart = this.cartService.getCart();
        this.items = this.cartService.getProducts();
    }
    addToCart(product) {
        this.cartService.addProduct(product);
    }
    openCart() {
        this.router.navigate(['cart']);
    }

}
