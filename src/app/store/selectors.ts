import { createSelector } from "@ngrx/store";
import { shopModel, StateModel } from "../models/state.model";

export const shopSelector = (state: StateModel) => state.shop;

export const getProducts = createSelector(
    shopSelector,
    state => state.productList
);

export const getCartItems = createSelector(
    shopSelector,
    state => state.cartItems
);