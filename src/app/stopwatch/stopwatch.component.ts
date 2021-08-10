import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit {
  myInterval;
  started = false;
  canReset = false;
  seconds = 0;
  minutes = 0;
  constructor() { }

  ngOnInit(): void {
  }

  startTimer() {
    this.started = true;
    setTimeout(() => {
      this.canReset = true;
    }, 1000);
    this.myInterval = setInterval(() => {
      this.seconds += 1;
      if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes += 1;
      }
    }, 1000);
  }
  stopTimer() {
    this.started = false;
    clearInterval(this.myInterval);
  }
  resetTimer() {
    clearInterval(this.myInterval);
    this.canReset = false;
    this.started = false;
    this.seconds = 0;
    this.minutes = 0;
  }
}
