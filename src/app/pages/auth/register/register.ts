import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth';
import { lastValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  
 registerForm: FormGroup;

 constructor(private fb: FormBuilder, private authService: AuthService, private router: Router
) {
  
   this.registerForm = this.fb.group({
     name: ['', Validators.required],
     email: ['', [Validators.required, Validators.email]],
     password: ['', Validators.required]
   });
 }

  async onSubmit() {
  if (this.registerForm.valid) {
    const { name, email, password } = this.registerForm.value;
    try {
      await lastValueFrom(this.authService.register(name, email, password));
      this.router.navigate(['/login']);
    } catch (err) {
      console.error('Error al registrarse', err);
    }
  }

}
 onLogin() {
    this.router.navigate(['/login']);
  }
}


  