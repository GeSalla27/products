import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './listProducts/list-products.component';
import { NewProductComponent } from './newProduct/new-product.component';

const routes: Routes = [
    { path: '', redirectTo: 'listProduct', pathMatch: 'full' },
    { path: 'newProduct', component: NewProductComponent },
    { path: 'listProduct', component: ListProductsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }