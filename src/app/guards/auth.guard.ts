import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MainService } from '../services/main.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private mainService: MainService, private router: Router) {}
  canActivate(): boolean {
    if (this.mainService.getLoginSession() === null) {
      this.router.navigate(['/main']);
      return false;
    }
    return true;
  }
}
