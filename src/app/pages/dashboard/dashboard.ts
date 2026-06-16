import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RestaurantService } from '../../core/services/restaurant';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  restaurant: any = null;
  loading = true;
  hasRestaurant = false;

constructor(private restaurantService: RestaurantService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    lastValueFrom(this.restaurantService.getMyRestaurant())
      .then((res) => {
        console.log('respuesta:', res);
        if (res.hasRestaurant) {
          this.restaurant = res.data;
          this.hasRestaurant = true;
        }
      })
      .catch((err) => {
        console.error('Error:', err);
      })
            .finally(() => {
              this.loading = false;
              this.cdr.detectChanges();
      });
  }

  onLogout() {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
}