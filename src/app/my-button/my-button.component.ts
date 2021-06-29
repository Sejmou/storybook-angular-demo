import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent {
  @Input() text: string = 'Action';

  buttonClick: EventEmitter<void> = new EventEmitter<void>();

  handleClick() {
    this.buttonClick.emit();
  }
}
