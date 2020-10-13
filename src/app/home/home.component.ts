import { MainService } from './../services/main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public currentUser: any;

  constructor(private mainService: MainService) {
    this.currentUser = this.mainService.getLoginSession();
  }

  public logoutUser(): void {
    this.mainService.destroySessions();
  }

  ngOnInit(): void {}
}
