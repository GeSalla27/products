import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Product } from '../model/product';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    private _url = '/api/products';

    constructor(private _httpClient: HttpClient) {}

    getAll(): Observable<Product[]> {
        return this._httpClient.get<Product[]>(this._url);
    }

    save(product: Product): Observable<Product> {
        const obj = { ...product, date: new Date() };
        return this._httpClient.post<Product>(this._url, obj);
    }

    update(product: Product): Observable<Product> {
        const obj = { ...product, date: new Date() };
        return this._httpClient.put<Product>(this._url, obj);
    }

    delete(id: number): Observable<HttpResponse<Product>> {
        return this._httpClient.delete<Product>(this._url + '/' + id, {
            observe: 'response'
        });
    }
}
