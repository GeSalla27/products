import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmationService } from '../../utils/modalConfirmation/modal-confirmation.service';
import { ModalProductComponent } from '../modalProduct/modal-product.component';
import { Product } from '../../model/product';
import { ProductsService } from '../../services/products.service';

@Component({
    selector: 'app-list-products',
    templateUrl: './list-products.component.html',
    styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
    public products?: Array<Product>;

    constructor(
        private _service: ProductsService,
        public _modalService: NgbModal,
        private _snackBar: MatSnackBar,
        private _confirmationDialogService: ModalConfirmationService
    ) {}

    ngOnInit(): void {
        this._service.getAll().subscribe((products: Product[]) => {
            this.products = products;
        });
    }

    editModal(product: Product) {
        const modalRef = this._modalService.open(ModalProductComponent);
        modalRef.componentInstance.product = product;
        modalRef.result
            .then((result) => {
                if (result) {
                    this._service.update(result).subscribe(
                        (result) => {
                            this.showMessage('Produto Alterado!');
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
                }
            })
            .catch((res) => {});
    }

    showMessage(message: string) {
        this._snackBar.open(message, 'Fechar', {
            duration: 2000
        });
    }

    deleteProduct(product: Product) {
        this._confirmationDialogService
            .confirm('Atenção', 'Você deseja mesmo remover este produto?')
            .then((confirmed) => {
                if (confirmed) {
                    this._service.delete(product.id!).subscribe(
                        (result) => {
                            if (result.status == 200) {
                                const index = this.products?.findIndex(
                                    ({ id }) => id === product.id
                                );
                                this.products?.splice(index!, 1);
                            }
                        },
                        (error) => console.log(error)
                    );
                }
            })
            .catch((error) => 0);
    }
}
