import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private apiUrl = 'https://localhost:7296/api/Restaurant';

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.authService.getToken()}`
    });
  }

  getMyRestaurant(): Observable<any> {
    return this.http.get(`${this.apiUrl}/get-restaurants-by-user`, { headers: this.getHeaders() });
  }

  createRestaurant(name: string, description: string, logo: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/create-restaurant`, { name, description, logo }, { headers: this.getHeaders() });
  }
}