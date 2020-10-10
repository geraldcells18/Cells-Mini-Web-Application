import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainServiceService {
  public showCreateAccount: boolean;

  constructor() {
    this.showCreateAccount = false;
  }

  public toggleCreateComponent(): boolean {
    this.showCreateAccount = !this.showCreateAccount;
    return this.showCreateAccount;
  }
}
