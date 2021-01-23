import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

const keyAuth: string = 'auth';
const keyUser: string = 'user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: UserService) {}

  Autenticar(token: string) {
    localStorage.setItem(keyAuth, token);
  }

  setUser(user: User) {
    this.userService.setUser(user);
    localStorage.setItem(keyUser, JSON.stringify(user));
  }

  Autenticado(): boolean {
    return this.getAuth() != null;
  }

  getAuth(): string {
    return localStorage.getItem(keyAuth);
  }

  logout() {
    localStorage.removeItem(keyAuth);
    localStorage.removeItem(keyUser);
    this.userService.setUser(null);
  }

}