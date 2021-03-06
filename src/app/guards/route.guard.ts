import { MainService } from './../services/main.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouteGuard implements CanActivate {
  constructor(private mainService: MainService, private router: Router) {}

  canActivate(): boolean {
    if (this.mainService.getSuccessSession() === null) {
      this.router.navigate(['/main']);
      return false;
    }
    return true;
  }
}
