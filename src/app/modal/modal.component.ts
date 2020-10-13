import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() title: boolean;
  @Input() message: boolean;
  @Input() isShow: boolean;
  @Output() closeClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  closeModalDialog(): void {
    this.closeClick.emit(false);
  }
}
