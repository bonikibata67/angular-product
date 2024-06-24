import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ProductService} from './services/product.service'


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})

export class CategoryComponent {
  form: FormGroup = new FormGroup({
    categoryName: new FormControl(null, Validators.required),
    description: new FormControl(null)
  });

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.form.reset();
    }
  }
  categories: string[] = ['Category A', 'Category B', 'Category C']; // Mocked categories for demo

  constructor(private productService: ProductService) {}

  getProductsByCategory(category: string) {
    const products = this.productService.getProductsByCategory(category);
    console.log(`Products in ${category}:`, products);
    // You can display products or perform other actions with the products
  }
}




