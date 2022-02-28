import { CartModel, Product } from "./product.model";

export interface StateModel{
    shop: shopModel
};
export interface shopModel{
    productList: Product[];
    cartItems: CartModel[];
}