import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  async onSubmit() {
  if (this.loginForm.valid) {
    const { email, password } = this.loginForm.value;
    try {
      const res = await lastValueFrom(this.authService.login(email, password));
      this.authService.saveToken(res.token);
      this.router.navigate(['/dashboard']);
    } catch (err) {
      console.error('Error al hacer login', err);
    }
  }  }
  
  onRegister() {
    this.router.navigate(['/register']);
  }
}