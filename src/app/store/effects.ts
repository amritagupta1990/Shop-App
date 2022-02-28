import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { Product } from "../models/product.model";
import { ApiService } from "../services/api.service";
import { getProductList, invokeProductAPI } from "./actions";
@Injectable()
export class ShopEffect{
    constructor(private action$: Actions, private apiService: ApiService){}
    loadProducts$ = createEffect(() => {
        return this.action$.pipe(
            ofType(invokeProductAPI),
            mergeMap(() => this.apiService.getProductList().pipe(
                map((products: Product[]) => getProductList({allProducts: products}))
            ))
        )
    });
} 