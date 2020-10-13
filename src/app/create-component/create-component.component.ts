import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.scss'],
})
export class CreateComponentComponent implements OnInit {
  public currentElem = '';
  public formValue = {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
  };
  public isValid = false;

  constructor(private mainService: MainService, private router: Router) {}

  ngOnInit(): void {}

  public closeCreateComponent(): boolean {
    return this.mainService.toggleCreateComponent();
  }

  public getProps(e: any): void {
    // tslint:disable-next-line: no-string-literal
    this.currentElem = e === '' ? '' : e.target['id'];
  }

  // Validator will trigger every time the model change.
  public formChecker(): void {
    this.isValid =
      this.formValue.firstName !== '' &&
      this.formValue.lastName !== '' &&
      this.getValueLength('username') >= 7 &&
      this.getValueLength('password') >= 10;
  }

  public getValueLength(id: string): number {
    return this.formValue[id].length;
  }

  public async register(): Promise<void> {
    const result =
      (await this.mainService.createUser(this.formValue).toPromise()) || null;
    if (result !== null) {
      this.mainService.setSuccessSession();
      this.mainService.setLoginSession(JSON.stringify(result));
      this.router.navigate(['/success']);
    }
  }
}
