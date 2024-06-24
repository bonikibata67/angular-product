import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]+$/)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/)])
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.form.reset();
    }
  }
}


// export class SignupComponent {

// }
// export class SignupComponent implements OnInit {
//   signupForm!: FormGroup;
//   form!: FormGroup;

//   ngOnInit(): void {
//     this.signupForm = new FormGroup({
//       username: new FormControl(null, [Validators.required, Validators.minLength(3)]),
//       email: new FormControl(null, [Validators.required, Validators.email]),
//       password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/)])
//     });
//   }

//   onSubmit() {
//     if (this.signupForm.valid) {
//       console.log(this.signupForm.value);
//       this.signupForm.reset();
//     }
//   }
// }
// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
