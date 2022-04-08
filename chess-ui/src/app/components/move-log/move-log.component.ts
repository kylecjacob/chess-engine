import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'chess-move-log',
  templateUrl: './move-log.component.html',
  styleUrls: ['./move-log.component.css']
})
export class MoveLogComponent implements OnInit {
  @Input() moves!: string[];
  constructor() { }

  ngOnInit(): void { }

}
