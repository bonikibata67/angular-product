import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: any[] = []; 

  constructor() {}

  addProduct(product: any) {
    this.products.push(product);
  }

  getProductsByCategory(category: string): any[] {
    return this.products.filter(product => product.category === category);
  }

  getAllProducts(): any[] {
    return this.products;
  }
}

