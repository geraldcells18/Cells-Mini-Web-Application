import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  public showCreateAccount: boolean;
  private readonly API_ENDPOINT = 'http://localhost:8086/users';

  constructor(private readonly http: HttpClient) {
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

  public loginUser(json: object = {}): Observable<any> {
    const header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(
      this.API_ENDPOINT + '/login',
      JSON.stringify(json),
      header
    );
  }

  public createUser(json: object = {}): Observable<object> {
    const header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(
      this.API_ENDPOINT + '/register',
      JSON.stringify(json),
      header
    );
  }

  public setLoginSession(user: string): void {
    localStorage.setItem('INFO', user);
  }

  public getLoginSession(): any {
    if (localStorage.getItem('INFO') !== null) {
      return JSON.parse(localStorage.getItem('INFO'));
    } else {
      return null;
    }
  }

  public destroySessions(): void {
    localStorage.clear();
    window.location.reload();
  }
}
