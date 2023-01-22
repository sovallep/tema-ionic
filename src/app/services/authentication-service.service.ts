import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(
    private router: Router,
  ) { }

  async onLoginSuccess() {
    await this.router.navigate(['/']);
  }
}
