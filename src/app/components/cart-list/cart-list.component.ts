import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CartModel } from 'src/app/models/product.model';
import { StateModel } from 'src/app/models/state.model';
import { removeFromCart } from 'src/app/store/actions';
import { getCartItems } from 'src/app/store/selectors';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cartList: CartModel[]= [];
   constructor(private store: Store<StateModel>) { }

  ngOnInit(): void {
    this.store.pipe(select(getCartItems)).subscribe((items) => {
      this.cartList = items;
    });
  }

  removeFromCart(e:any, el: any){
    this.store.dispatch(removeFromCart({itemId:el.id}));
  }

}
