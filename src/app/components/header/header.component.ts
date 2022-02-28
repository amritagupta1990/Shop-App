import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { CartModel } from 'src/app/models/product.model';
import { StateModel } from 'src/app/models/state.model';
import { getCartItems } from 'src/app/store/selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartList: CartModel[] = [];
  constructor( private router: Router, private store: Store<StateModel>) { }

  ngOnInit(): void {
    this.store.pipe(select(getCartItems)).subscribe((cartItems) => {
      this.cartList = cartItems;
    });
  }
  goToCart(e: any){
    e.stopPropagation();
    this.router.navigate(['/cart-list'])
  }

}
