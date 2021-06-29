import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

type CardSize = 'large' | 'medium' | 'small';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.css']
})
export class MyCardComponent {
  /**
   * The title to use for the card.
   */
  @Input() title: string = "Some title";

  /**
   * The size of the card. Can be small, medium or large.
   */
  @Input() size: CardSize = 'medium';

  /**
   * click handler
   */
  @Output() actionClick: EventEmitter<void> = new EventEmitter<void>();

  onButtonClick() {
    this.actionClick.emit();
  }
}
