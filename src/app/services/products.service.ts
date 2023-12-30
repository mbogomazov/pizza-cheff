import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getProductsList(): Observable<Array<Product>> {
    return of<Array<Product>>([{
      imageUrl: '../../../assets/img/meat_deluxe.png',
      title: 'Мясная Делюкс',
      description: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы'
    }, {
      imageUrl: '../../../assets/img/sea_premium.png',
      title: 'Морская Премиум',
      description: 'Перец, сыр, креветки, кальмары, мидии, лосось'
    }, {
      imageUrl: '../../../assets/img/beacon_and_sausages.png',
      title: 'Бекон и Сосиски',
      description: 'Бекон, сыр, сосиски, ананас, томатная паста'
    }, {
      imageUrl: '../../../assets/img/chicken_deluxe.png',
      title: 'Куриная Делюкс',
      description: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста'
    }, {
      imageUrl: '../../../assets/img/bbq_premium.png',
      title: 'Барбекю Премиум',
      description: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили'
    }, {
      imageUrl: '../../../assets/img/pepperoni_double.png',
      title: 'Пепперони Дабл',
      description: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная'
    }, {
      imageUrl: '../../../assets/img/chicken_trio.png',
      title: 'Куриное Трио',
      description: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы'
    }, {
      imageUrl: '../../../assets/img/cheese.png',
      title: 'Сырная',
      description: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный'
    }])
  }
}
