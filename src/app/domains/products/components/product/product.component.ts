import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input({ required: true }) img: string = '';
  @Input() price: number = 0;
  @Input() title: string = '';

  @Output() addToCart = new EventEmitter<string>();

  addToCardHandler(){
    console.log('click form child');
    this.addToCart.emit('hola este es un mensaje desde el hijo ')
  }
}
