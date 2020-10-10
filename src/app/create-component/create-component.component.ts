import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainServiceService } from '../services/main.service';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.scss'],
})
export class CreateComponentComponent implements OnInit {
  public currentElem = '';
  public formValue = {
    name: '',
    surname: '',
    username: '',
    password: '',
  };
  public isValid = false;

  constructor(
    private mainService: MainServiceService,
    private router: Router
  ) {}

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
      this.formValue.name !== '' &&
      this.formValue.surname !== '' &&
      this.getValueLength('username') >= 7 &&
      this.getValueLength('password') >= 10;
  }

  public getValueLength(id: string): number {
    return this.formValue[id].length;
  }

  public register(): void {
    this.mainService.setSuccessSession();
    this.router.navigate(['/success']);
  }
}
