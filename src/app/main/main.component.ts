import { MainServiceService } from '../services/main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private mainService: MainServiceService) {}

  public isShowCreateComponent(): boolean {
    return this.mainService.showCreateAccount;
  }

  ngOnInit(): void {}
}
