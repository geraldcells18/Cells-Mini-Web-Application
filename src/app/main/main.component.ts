import { MainService } from '../services/main.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private mainService: MainService, private router: Router) { }

  public isShowCreateComponent(): boolean {
    return this.mainService.showCreateAccount;
  }

  ngOnInit(): void {
    if (this.mainService.getLoginSession() !== null) {
      this.router.navigate(['/home']);
    }
  }
}
