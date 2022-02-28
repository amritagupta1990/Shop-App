import { Action, createReducer, on } from "@ngrx/store";
import { StateModel } from "../models/state.model";
import { addToCart, getProductList, removeFromCart } from "./actions";

export const initialState: StateModel = {
    shop:{
        productList:[],
        cartItems: []
    }
}

const _shopReducer = createReducer(
    initialState.shop,
    on(getProductList, (state, {allProducts}) => {
        return {
            ...state,
            productList: allProducts
        }
    }),
    on(addToCart, (state, action) => {
        return {
            ...state,
            cartItems: [...state.cartItems, action.cartItem]
        }
    }),
    on(removeFromCart, (state, action) => {
        let cartItems = state.cartItems.filter((el) => {
            console.log(action);
            return el.id !== action.itemId
        });
        console.log('cartItems',cartItems);
        return {
            ...state,
            cartItems: cartItems
        };
    })
);

export function shopReducer(state: any, action: any){
    return _shopReducer(state, action);
}