import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../app.component.scss', './login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private userService: UserService, private router:Router) {
    this.loginForm = new FormGroup(
      {
        userName: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
      }
    );
  }

  ngOnInit(): void {
  }

  login() {
    if (this.loginForm.valid) {/*
      this.userService.login(this.loginForm.get("userName").value, this.loginForm.get("password").value).
        subscribe(
          (response: any) => {
        localStorage.setItem('account',JSON.stringify(response));
      },
      (error: any) => {
        alert("Error al loguear");
      })*/
      localStorage.setItem('account',(this.loginForm.get("userName").value));
      this.router.navigate(['home']);      
    }
    else{
      this.loginForm.markAllAsTouched();
    }
  }

}
