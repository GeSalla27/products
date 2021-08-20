import {
    Component,
    EventEmitter,
    HostListener,
    Input,
    OnInit,
    Output
} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../../model/product';

@Component({
    selector: 'app-modal-product',
    templateUrl: './modal-product.component.html',
    styleUrls: ['./modal-product.component.scss']
})
export class ModalProductComponent implements OnInit {
    @Input()
    public product!: Product;
    @Output() passEntry: EventEmitter<any> = new EventEmitter();

    public code!: number;
    public name!: string;
    public price!: number;
    public updatedAt!: Date;

    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit() {
        this.code = this.product.code;
        this.name = this.product.name;
        this.price = this.product.price;
        this.updatedAt = this.product.updatedAt!;
    }

    saveModal() {
        this.product.code = this.code;
        this.product.name = this.name;
        this.product.price = this.price;
        this.product.updatedAt = this.updatedAt;
        this.passEntry.emit(this.product);
        this.activeModal.close(this.product);
    }

    closeModal() {
        this.activeModal.close();
    }
}
