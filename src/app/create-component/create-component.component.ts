import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../services/main.service';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.scss']
})
export class CreateComponentComponent implements OnInit {
  constructor(private mainService: MainServiceService) {}

  ngOnInit(): void {}

  public closeCreateComponent(): boolean {
    return this.mainService.toggleCreateComponent();
  }
}
