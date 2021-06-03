import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    private _products: Array<any>;
    private _url = 'http://localhost:3000/products';

    constructor(private _httpClient: HttpClient) {
        this._products = new Array();
    }

    public get products(): Array<any> {
        return this._products;
    }

    getAll(): Observable<Product[]> {
        return this._httpClient.get<Product[]>(this._url);
    }

    saveProduct(product: Product): Observable<Product> {
        const obj = { ...product, date: new Date() };
        return this._httpClient.post<Product>(this._url, obj);
    }
}
