import { Component, OnInit } from '@angular/core';
import { select, State, Store } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';
import { StateModel } from 'src/app/models/state.model';
import { addToCart, invokeProductAPI } from 'src/app/store/actions';
import { getCartItems, getProducts } from 'src/app/store/selectors';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private store: Store<StateModel>) { }
  productList: Product[] = [];
  ngOnInit(): void {
    this.store.dispatch(invokeProductAPI());
    this.store.pipe(select(getProducts)).subscribe((products) => {
      this.productList = products;
    });
  }
  addToCart(e:any, el: Product){
    const {stock, ...selectedItem } = el;
    this.store.dispatch(addToCart({cartItem: selectedItem}))
  }

}
