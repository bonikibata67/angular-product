import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {
  categories: string[] = ['Category A', 'Category B', 'Category C']; // Mocked categories for demo
  form: FormGroup = new FormGroup({
    productName: new FormControl(null, Validators.required),
    category: new FormControl(null, Validators.required),
    price: new FormControl(null, Validators.required)
  });

  constructor(private productService: ProductService) {}

  onSubmit() {
    if (this.form.valid) {
      this.productService.addProduct(this.form.value);
      console.log('Product added:', this.form.value);
      this.form.reset();
    }
  }
}

