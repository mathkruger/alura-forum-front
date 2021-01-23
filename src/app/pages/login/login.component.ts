import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { BaseService } from './../../services/base/base.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service: BaseService, private authService: AuthService, private router: Router) { }

  loginForm: {
    email: string,
    senha: string
  } = {
    email: undefined,
    senha: undefined 
  }

  ngOnInit() {
  }

  entrar() {
    this.service.Post<any>('auth', this.loginForm)
    .subscribe(item => {
      this.authService.Autenticar(item.token);
      this.router.navigate(['']);
    });
  }
}
