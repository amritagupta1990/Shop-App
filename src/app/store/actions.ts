import { createAction, props } from "@ngrx/store";
import { CartModel, Product } from "../models/product.model";

export const getProductList = createAction(
    "[Product] Product API Success",
    props<{allProducts: Product[]}>()
);

export const invokeProductAPI = createAction(
    "[Product] Invoke Product List API"
);

export const addToCart = createAction(
    "[Product] Add to Cart",
    props<{cartItem: CartModel}>()
);

export const removeFromCart = createAction(
    "[Product] Remove From Cart",
    props<{itemId: number}>()
)
