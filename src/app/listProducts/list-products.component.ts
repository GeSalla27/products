import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductsService } from '../services/products.service';

@Component({
    selector: 'app-list-products',
    templateUrl: './list-products.component.html',
    styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

    public products?: Array<any>;

    constructor(private _service: ProductsService) { }

    ngOnInit(): void {
        this._service.getAll().subscribe((products: Product[]) => {
            this.products = products;
        });
    }
}
