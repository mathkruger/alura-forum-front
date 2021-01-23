import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
    providedIn: 'root'
})
export class BaseService {
    constructor(private http: HttpClient, private auth: AuthService, private router: Router) {
        this.apiUrl = environment.apiUrl;
    }

    apiUrl: string;

    Get<Tretorno>(url) {
        return this.http.get<Tretorno>(this.apiUrl + url, {
            headers: {
                'Authorization': 'Bearer ' + this.auth.getAuth()
            }
        })
    }

    Post<Tretorno>(url, model) {
        return this.http.post<Tretorno>(this.apiUrl + url, model, {
            headers: {
                'Authorization': 'Bearer ' + this.auth.getAuth()
            }
        })
    }

    Put<Tretorno>(url, model) {
        return this.http.put<Tretorno>(this.apiUrl + url, model, {
            headers: {
                'Authorization': 'Bearer ' + this.auth.getAuth()
            }
        })
    }

    Delete<Tretorno>(url) {
        return this.http.put<Tretorno>(this.apiUrl + url, {
            headers: {
                'Authorization': 'Bearer ' + this.auth.getAuth()
            }
        })
    }
}