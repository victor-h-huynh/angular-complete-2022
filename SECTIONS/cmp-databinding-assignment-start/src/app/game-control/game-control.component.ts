import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() currentTime = new EventEmitter<number>();
  interval;
  currentNumber = 0;

  constructor() { }

  ngOnInit(): void {
  }

  startCount() {
    this.interval = setInterval(() => {
      this.currentTime.emit(this.currentNumber);
      this.currentNumber++;
    }, 1000);
  }

  stopCount() {
    clearInterval(this.interval);
    this.interval = null;
  }
}
