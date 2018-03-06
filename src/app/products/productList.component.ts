import { Component, OnInit } from '@angular/core'
import { IProduct } from '../Interfaces/IProduct'
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './productList.component.html',
    styleUrls: ['./productList.component.css']
})

export class ProductListComponent
        implements OnInit{

    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    products: IProduct[];

    filteredProducts: IProduct[];
    _productFilter: string;

    get productFilter(): string {

        return this._productFilter;
    }
    
    set productFilter(value: string) {
        this._productFilter = value;
        this.filteredProducts = this._productFilter
            ? this.performFilter(this._productFilter)
            : this.products
    }

    constructor(private _productService: ProductService) {
    }

    ngOnInit(): void {
        this.products = this._productService.getProducts();
        this.filteredProducts = this.products;
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy: string): IProduct[] {
        return this.products.filter((product: IProduct) => 
            product.productName.toLocaleLowerCase().indexOf(filterBy.toLocaleLowerCase()) !== -1);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}