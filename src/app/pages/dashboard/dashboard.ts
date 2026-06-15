import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {


  onLogout() {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
}
