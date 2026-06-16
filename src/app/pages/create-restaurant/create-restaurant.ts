import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { RestaurantService } from '../../core/services/restaurant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-restaurant',
  standalone: false,
  templateUrl: './create-restaurant.html',
  styleUrl: './create-restaurant.css',
})
export class CreateRestaurant {

  createRestaurantForm: FormGroup;
  logoPreview: string | null = null;

  constructor(private restaurantService: RestaurantService, private fb: FormBuilder, private router: Router) {
    this.createRestaurantForm = this.fb.group({
      name: ['', Validators.required],
      description: ['']
    });
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.logoPreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  async onSubmit() {
    if (this.createRestaurantForm.valid) {
      const { name, description } = this.createRestaurantForm.value;
      try {
        await lastValueFrom(this.restaurantService.createRestaurant(name, description, this.logoPreview ?? ''));
        this.router.navigate(['/dashboard']);
      } catch (err) {
        console.error('Error al crear el restaurante', err);
      }
    }
  }
}