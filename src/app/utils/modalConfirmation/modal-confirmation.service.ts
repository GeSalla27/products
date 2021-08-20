import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmationComponent } from './modal-confirmation.component';

@Injectable()
export class ModalConfirmationService {
    constructor(private modalService: NgbModal) {}

    public confirm(
        title: string,
        message: string,
        btnOkText: string = 'Sim',
        btnCancelText: string = 'Cancelar',
        dialogSize: 'sm' | 'lg' = 'sm'
    ): Promise<boolean> {
        const modalRef = this.modalService.open(ModalConfirmationComponent, {
            size: dialogSize
        });
        modalRef.componentInstance.title = title;
        modalRef.componentInstance.message = message;
        modalRef.componentInstance.btnOkText = btnOkText;
        modalRef.componentInstance.btnCancelText = btnCancelText;

        return modalRef.result;
    }
}
