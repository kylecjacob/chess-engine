import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'chess-new-game-modal',
  templateUrl: './new-game-modal.component.html',
  styleUrls: ['./new-game-modal.component.css']
})
export class NewGameModalComponent implements OnInit {
  @Output() newGameClicked = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onNewGameClicked(): void {
    this.newGameClicked.emit();
  }

}
