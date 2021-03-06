import { Component, EventEmitter, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
    selector: 'app-new-product',
    templateUrl: './new-product.component.html',
    styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent {
    constructor(
        private _snackBar: MatSnackBar,
        private _service: ProductsService,
        private _router: Router
    ) {}

    public code!: number;
    public name!: string;
    public price!: number;

    ngOnInit() {}

    save() {
        const obj = { code: this.code, name: this.name, price: this.price };
        if (this.validateFields()) {
            this._service.save(obj).subscribe(
                (result) => {
                    this.clearFields();
                    this.showMessage('Produto Salvo!');
                    this._router.navigateByUrl('listProduct');
                },
                (error) =>
                    this.showMessage(
                        'Ops! Aconteceu algum problema - Code: ' +
                            error.error.statusCode +
                            ' - ' +
                            error.error.message[0].constraints
                                .IsProductNameUniqueConstraint
                    )
            );
        } else {
            this.showMessage('Campos Obrigatórios não informados!');
        }
    }

    clearFields() {
        this.code = 0;
        this.name = '';
        this.price = 0;
    }

    validateFields() {
        const isValid = this.name != '' && this.price > 0;
        return isValid;
    }

    showMessage(message: string) {
        this._snackBar.open(message, 'Fechar', {
            duration: 2000
        });
    }
}
