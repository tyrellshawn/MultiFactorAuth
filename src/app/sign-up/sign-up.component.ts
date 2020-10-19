import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    console.log("Sign Up Page!");
    this.signUpForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'phoneNumber': new FormControl('', [Validators.required, Validators.minLength(6)]),
      
    });
  }
  signUpUser(){
    console.log("Signing Up User");
    console.log('Sign up form --->', this.signUpForm);

    this.authService.signupUserWithEmail( 
        this.signUpForm.value.email, 
        this.signUpForm.value.password, 
        this.signUpForm.value.phoneNumber);
  
  }

}
