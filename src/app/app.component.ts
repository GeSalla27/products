import { Component } from '@angular/core';
import { ProductsService } from './services/products.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'products';

    name = 'Angular 4';
    _opened: boolean = false;

    _toggleSidebar() {
        this._opened = !this._opened;
    }
    constructor(private _service: ProductsService) {}
}
