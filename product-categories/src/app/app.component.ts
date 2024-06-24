import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { AsyncValidatorFn, FormArray, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { LoginComponent } from "./login/login.component";
import { CategoryComponent } from "./category/category.component";
import { NgModule } from '@angular/core';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [ RouterOutlet, SignupComponent, CommonModule, ReactiveFormsModule, LoginComponent, CategoryComponent,]
})
export class AppComponent {
  title = 'product-categories';
}
