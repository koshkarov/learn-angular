import { Injectable } from "@angular/core";
import { IProduct } from "../Interfaces/IProduct";

@Injectable()
export class ProductService {
    getProducts(): IProduct[] {
        return [
            {
                "productId": 2,
                "productName": "Apple iPhone SE 64Gb",
                "productCode": "aIpse-64",
                "releaseDate": "May 15, 1992",
                "description": "Awesome phone.",
                "price": 199.99,
                "rating": 2.4,
                "imageUrl": "https://www.compareprix.in/images/resizeimages/product/128/iphone5SLarge.jpg"
            },
            {
                "productId": 5,
                "productName": "Apple iPhone 8 256Gb",
                "productCode": "aIp8-256",
                "releaseDate": "May 15, 1992",
                "description": "New and awesome phone.",
                "price": 799.99,
                "rating": 4.7,
                "imageUrl": "https://www.compareprix.in/images/resizeimages/product/128/Apple-iPhone-8-plus-64GB-large.jpg"
            }
        ];
    }

}