import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'seng41293-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,MatInputModule,MatButtonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  emailCTRL = new FormControl('tharushi@gmail.com',[
      Validators.required,
      Validators.email
    ])

  passwordCTRL = new FormControl('123password',[
    Validators.required,
    Validators.minLength(3)
  ])
  loginFormGroup = new FormGroup({
    email : this.emailCTRL,
    password : this.passwordCTRL
  })

  constructor(private router:Router){}

  onLogin(){
    console.log(this.loginFormGroup.value);
    this.router.navigate(['/admin']);
  }
}
