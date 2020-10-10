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

  public setSuccessSession(): void {
    // This is just only a simple value for handling success page's session.
    localStorage.setItem('SUCCESS', '1');
  }

  public getSuccessSession(): any {
    return localStorage.getItem('SUCCESS');
  }

  public clearSuccessSession(): void {
    localStorage.removeItem('SUCCESS');
  }

  public setLoginSession(): void {}
}
