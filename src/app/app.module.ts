import { NewProductComponent } from './product/newProduct/new-product.component';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { ListProductsComponent } from './product/listProducts/list-products.component';
import {
    CommonModule,
    NgLocaleLocalization,
    NgLocalization,
    registerLocaleData
} from '@angular/common';
import LocalePt from '@angular/common/locales/pt';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalProductComponent } from './product/modalProduct/modal-product.component';
import { ModalConfirmationComponent } from './utils/modalConfirmation/modal-confirmation.component';
import { ModalConfirmationService } from './utils/modalConfirmation/modal-confirmation.service';

registerLocaleData(LocalePt, 'pt');

@NgModule({
    declarations: [
        AppComponent,
        NewProductComponent,
        ListProductsComponent,
        ModalProductComponent,
        ModalConfirmationComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        MatButtonModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
        HttpClientModule,
        NgbModule
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'pt' },
        { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
        { provide: NgLocalization, useClass: NgLocaleLocalization },
        ModalConfirmationService
    ],
    entryComponents: [ModalConfirmationComponent],

    bootstrap: [AppComponent]
})
export class AppModule {}
