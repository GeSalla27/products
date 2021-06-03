import { NewProductComponent } from './newProduct/new-product.component';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { ListProductsComponent } from './listProducts/list-products.component';
import { registerLocaleData } from '@angular/common';
import LocalePt from '@angular/common/locales/pt'
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(LocalePt, 'pt');

@NgModule({
    declarations: [AppComponent, NewProductComponent, ListProductsComponent],
    imports: [BrowserModule, AppRoutingModule, FormsModule, MatButtonModule, MatSnackBarModule, BrowserAnimationsModule, HttpClientModule],
    providers: [
        { provide: LOCALE_ID, useValue: 'pt' },
        { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
