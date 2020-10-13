import { MainService } from './../services/main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-component',
  templateUrl: './success-component.component.html',
  styleUrls: ['./success-component.component.scss'],
})
export class SuccessComponentComponent implements OnInit {
  public GIF = '../../assets/images/finish.gif';

  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.GIF = '../../assets/images/finish_loop.gif';
    }, 1500);
    this.mainService.clearSuccessSession();
  }

  public homeRedirect(): void {
    window.location.reload();
  }
}
