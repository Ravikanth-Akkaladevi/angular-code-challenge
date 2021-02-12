import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {


  loginForm: FormGroup;
  submitted = false;
  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group(
      {

        username: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(6)]],
      })

  }

  loginUser() {


    this.submitted = true;


    let userData;
    let username = this.loginForm.controls['username'].value;
    let password = this.loginForm.controls['password'].value
    let credentials = [username, password];

    if ((username == environment.username) && (password == environment.password)) {
      userData = JSON.parse(localStorage.getItem("loginToken")) || [];
      userData.push(credentials);
      localStorage.setItem('loginToken', JSON.stringify(credentials))
      //console.log('login success')
      this.router.navigate(['/dashboard'])
    }
    else
      this.router.navigate(['/login'])
  }

}
