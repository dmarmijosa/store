import { Component } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';

export interface Product{
  title:string;
  price:number;
  img:string;
}
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  products: Product[] = [
    {
      title: 'Primer producto',
      price: 2000,
      img: `https://picsum.photos/640/640?r=${Math.random()}`,
    },
    {
      title: 'Segundo producto',
      price: 3000,
      img: `https://picsum.photos/640/640?r=${Math.random()}`,
    },
    {
      title: 'tercer producto',
      price: 3000,
      img: `https://picsum.photos/640/640?r=${Math.random()}`,
    },
    {
      title: 'cuarto producto',
      price: 3000,
      img: `https://picsum.photos/640/640?r=${Math.random()}`,
    },
    {
      title: 'quinto producto',
      price: 3000,
      img: `https://picsum.photos/640/640?r=${Math.random()}`,
    },
    {
      title: 'sexto producto',
      price: 3000,
      img: `https://picsum.photos/640/640?r=${Math.random()}`,
    },
  ];

  formChild($event:string){
    console.log('estamos en el padre');
    console.log($event);
  }
}
