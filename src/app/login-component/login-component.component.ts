import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss'],
})
export class LoginComponentComponent implements OnInit {
  public credentials = {
    username: '',
    password: '',
  };

  public isError = false;

  constructor(private mainService: MainService) {}

  ngOnInit(): void {}

  public showCreateComponent(): void {
    this.mainService.toggleCreateComponent();
  }

  public async login(): Promise<void> {
    const result =
      (await this.mainService.loginUser(this.credentials).toPromise()) || null;
    if (result !== null) {
      this.mainService.setLoginSession(JSON.stringify(result));
      window.location.reload();
    } else {
      this.isError = true;
    }
  }

  public closeDialog(event: boolean): void {
    this.isError = event;
  }
}
