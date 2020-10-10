import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../services/main.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss'],
})
export class LoginComponentComponent implements OnInit {
  constructor(private mainService: MainServiceService) {}

  ngOnInit(): void {}

  public showCreateComponent(): void {
    this.mainService.toggleCreateComponent();
  }
}
