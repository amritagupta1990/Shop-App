import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Product } from "../models/product.model";
@Injectable()
export class ApiService{
    constructor(private http: HttpClient){}
    getProductList():Observable<Product[]>{
        return this.http.get<Product[]>('http://localhost:5002/product-list').pipe(map(data=>data));
    }
}