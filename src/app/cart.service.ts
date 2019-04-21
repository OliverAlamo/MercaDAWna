import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

    private data = [
        {
            category: 'Pizzas',
            expanded: true,
            pasillo: 1,
            products: [
                { id: 0, name: 'Pizza Salami', price: '3', pasillo: 1, picture: 'https://s3-media1.fl.yelpcdn.com/bphoto/ghDVPz3SuHuiITdnywgzlA/o.jpg'},
                { id: 1, name: 'Pizza de Atun', price: '3', pasillo: 1, picture: 'https://www.vitalipizza.com/images/_imageresizer/w1000-h1000-c1000x800/images/pizzas-retina/vitali-pizza-barcelona-atun-y-queso.jpg'},
                { id: 2, name: 'Pizza Barbacoa', price: '3', pasillo: 1, picture: 'http://www.vitalipizza.com/images/_imageresizer/w1000-h1000-c1000x800/images/pizzas-retina/vitali-pizza-barcelona-barbacoa-carne.jpg'},
                { id: 4, name: 'Pizza 4 Quesos', price: '3.2', pasillo: 1, picture: 'https://globalnatural.es/wp-content/uploads/global_pizza-vegandeli-chorizo-queso-1000x1000.jpg'}
            ]
        },
        {
            category: 'Pasta',
            expanded: true,
            pasillo: 2,
            products: [
                { id: 5, name: 'Macaroones', price: '1', pasillo: 2, picture: 'https://supercostablanca.es/3636/alteza-macarrones-500g--pasta.jpg'},
                { id: 6, name: 'Tortelini', price: '2', pasillo: 2, picture: 'https://az836796.vo.msecnd.net/media/image/product/en/large/0077956611088.jpg'},
                { id: 7, name: 'Spaghettis', price: '1.5', pasillo: 2, pictute: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrscQKPtU3vYN7N7SM3fB3fpaihhotbkhnL_LuAlAt65OKpved'},
            ]
        },
        {
            category: 'Frutas',
            expanded: true,
            pasillo: 3,
            products: [
                { id: 8, name: 'Manzanas', price: '3', pasillo: 3, picture: 'https://walmartar.vteximg.com.br/arquivos/ids/837019-1000-1000/Manzana-Red-Com-X-1-Kg-1-17492.jpg?v=636698133131070000'},
                { id: 9, name: 'Platanos', price: '2', pasillo: 3, picture: 'https://www.lacomer.com.mx/superc/img_art/42352_3.jpg'},
                { id: 10, name: 'Kiwis', price: '4', pasillo: 3, picture: 'https://greenshop.com.ar/wp-content/uploads/sites/13/2016/07/A.2.25-500GR.jpg'},
                { id: 11, name: 'Kaki', price: '5', pasillo: 3, picture: 'https://www.sunrisefruits.com/wp-content/uploads/2018/08/Productos-Caqui-Kaki-Sunrisefruitscompany.jpg'},
                { id: 12, name: 'Peras', price: '4', pasillo: 3, picture: 'http://willorganicos.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/e/pera-caipira-nacional-organica.jpg'},
            ]
        },
        {
            category: 'Carne',
            expanded: true,
            pasillo: 5,
            products: [
                { id: 13, name: 'Chorizo', price: '3', pasillo: 5, picture: 'https://www.embutidosezequiel.com/images/catalog/producto/11/976_chorizo-potro-3_FIRMA_es.jpg'},
                { id: 14, name: 'Jamon Serrano', price: '2', pasillo: 5, picture: 'https://totallytapas.com/574-thickbox_01oslo/jamon-serrano-gran-reserva.jpg'},
                { id: 15, name: 'Secreto Iberico', price: '4', pasillo: 5, picture: 'https://www.elpaladar.es/server/Portal_0005448/img/products/carne-secreto-iberico-ibedul_5056501.jpg'},
                { id: 16, name: 'Pollo Asado', price: '5', pasillo: 5, picture: 'http://dhb3yazwboecu.cloudfront.net/833/pollo-asado_l-3.jpg'},
                { id: 17, name: 'Carne Molida', price: '4', pasillo: 5, picture: 'http://cdn.shopify.com/s/files/1/2538/5286/products/carne-molida_1200x1200.jpg?v=1544379629'},
            ]
        },
        {
            category: 'Lacteos',
            expanded: true,
            pasillo: 5,
            products: [
                { id: 18, name: 'Leche Entera', price: '1', pasillo: 5, picture: 'https://unimarc.vteximg.com.br/arquivos/ids/169829-1000-1000/LECHE-UHT-ENTERA-CALAN-1-LT-1-20070.jpg?v=636584361058900000'},
                { id: 19, name: 'Queso Cheddar', price: '2', pasillo: 5, picture: 'https://vivanda.vteximg.com.br/arquivos/ids/176714-1000-1000/20103181.jpg?v=636840278929300000'},
                { id: 20, name: 'Yogur ', price: '4', pasillo: 5, picture: 'https://walmartar.vteximg.com.br/arquivos/ids/839286-1000-1000/Yogur-Natural-Sin-Azucar-Yogurisimo-250gr-1-292936.jpg?v=636748569360770000'},
                { id: 21, name: 'Queso Fresco', price: '5', pasillo: 5, picture: 'https://losbalanchares.es/wp-content/uploads/2018/03/QUESO-CABRA-SUJAIRA-FRESCO-400-GR.-ref.-1026.jpg'},

            ]
        },

        {
            category: 'Higiene',
            expanded: true,
            pasillo: 7,
            products: [
                { id: 23, name: 'Cepillos de Dientes', price: '2', pasillo: 7, picture: 'https://wongfood.vteximg.com.br/arquivos/ids/162087-1000-1000/Cepillo-de-Dientes-Pro-Doble-Accion-Pack-2-Unid-1-7557.jpg?v=636387595669030000'},
                { id: 24, name: 'Champú Pantene', price: '2', pasillo: 7, picture: 'https://www.tiendascolores.es/wp-content/uploads/2018/07/tiendas-colores-pantene-pro-v-champ%C3%BA-anti-caspa-270-ml.jpg'},
                { id: 25, name: 'Gomina ', price: '4', pasillo: 7, picture: 'https://supercostablanca.es/2212-thickbox_default/giorgi-gomina-gel-perfect-fix-165ml20.jpg'},
                { id: 26, name: 'Listerine', price: '5', pasillo: 7, picture: 'https://jumbocolombiafood.vteximg.com.br/arquivos/ids/209268-1000-1000/EAN-7702031563327.jpg?v=636288039720300000'},
            ]
        },

        {
            category: 'Bebidas',
            expanded: true,
            pasillo: 8,
            products: [
                { id: 28, name: 'Coca Cola', price: '1.7', pasillo: 8, picture: 'https://vivanda.vteximg.com.br/arquivos/ids/164517-1000-1000/21130.jpg?v=636137784237970000'},
                { id: 30, name: 'Pack Cerveza Calsberg', price: '4', pasillo: 8, picture: 'data:image/jpeg;base64,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ICReN7QSQHgag3J7w57HRXxEIas8m9IOj1TRSdnVRFhPsu3Y/wAWPGh8t+YCm+jfQGrrKU1NOY3APczs3HK45Q03afZ3daxtsvR2I0EU8ZimjbIx27XAEH38fFanR3AYaKHsKcER5nuAJJILjci51t5qbM/RKzzDimGz0z8lRE+J3APaRf7p2cPIlQWJe0Dra3LxK9kVlJHKwslY2Rh3a9oc0+YOip9d1WYe++Rj4rm9mO7t/BrwbeQsoYji0ys8xxvvwJ+C2YaZztm+/X/Zdyq+ploN4Zx5Pj/yaf0U70d6sqaGzp/4z+VrRj+3d3rp4KtM1pHHeinQapq3Ds2Et4vdpG31/QXK7L0a6taanAdMe2fyItGPJvH19yu0cYaA1oAA0AAsAOQAX0pomz5YwAAAAAaADQDyC+kRSQEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREB//2Q=='},
                { id: 31, name: 'Moet Chandon', price: '30', pasillo: 8, picture: 'https://bodegasalianza.vteximg.com.br/arquivos/ids/163681-1000-1000/4289-1.jpg?v=636553676344900000'},
                { id: 32, name: 'Whisky Jack Daniels', price: '23', pasillo: 8, picture: 'http://cdn.shopify.com/s/files/1/0403/4629/products/jack-daniels-master-distiller-series-no-4-tennessee-whisky_1024x1024.jpg?v=1526129326'},
            ]
        },

        {
            category: 'Chucherías/Bollería',
            expanded: true,
            pasillo: 8,
            products: [
                { id: 33, name: 'Chocolate Milka', price: '1.3', pasillo: 8, picture: 'https://s3-eu-west-1.amazonaws.com/images.linnlive.com/5fb5b0a2aac9b78ea113d1af4a8354a9/9cc01611-d040-4f77-a1a3-aaaeffb8dbef.jpg'},
                { id: 34, name: 'Ositos Haribo', price: '1.5', pasillo: 8, picture: 'https://geant.vteximg.com.br/arquivos/ids/213676-1000-1000/619059.jpg'},
                { id: 35, name: 'Chicles 5', price: '1', pasillo: 8, picture: 'https://www.thecandyland.cl/wp-content/uploads/2019/01/5gum_strawberry.png'},
                { id: 36, name: 'Patatas Pringles', price: '3.1', pasillo: 8, picture: 'https://wongfood.vteximg.com.br/arquivos/ids/157838-1000-1000/Papas-Original-Pringles-Tarro-67-g-148563001.jpg?v=636088742816130000'},
                { id: 37, name: 'Pipas Tijuana', price: '1.59', pasillo: 8, picture: 'https://dulzalia.com/2749-large_default/pipas-g-tijuana-junior-grefusa-36u-40grs.jpg'},
            ]
        },

    ]
  private cart = [];
  constructor() { }

  getProducts () {
    return this.data;
  }
  getCart () {
    return this.cart;
  }
  addProduct(product) {
    this.cart.push(product);
  }

    removeProduct(no) {
        this.cart.splice(no, 1);

    }


}
