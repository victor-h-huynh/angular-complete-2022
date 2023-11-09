import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayCount = 0;

  // Solution
  // oddNumbers: number[] = [];
  // evenNumbers: number[] = [];

  onIntervalFired(eventData: number) {
    this.displayCount = eventData;
    console.log('EVENTDATA', this.displayCount);
  }

  // Solution
  // onIntervalFired(firedNumber: number) {
  //   if (firedNumber % 2 === 0) {
  //     this.evenNumbers.push(firedNumber);
  //   } else {
  //     this.oddNumbers.push(firedNumber);
  //   }
  // }

}

