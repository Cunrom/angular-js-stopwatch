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
  hours = 0;
  minutes = 0;
  seconds = 0;
  clockTick = new Audio('../../assets/audio/clock-tick.mp3');
  mouseClick = new Audio('../../assets/audio/mouse-click.mp3');
  constructor() { }

  ngOnInit(): void {
  }

  startTimer() {
    this.mouseClick.play();
    this.started = true;
    setTimeout(() => {
      this.canReset = true;
    }, 100);
    this.myInterval = setInterval(() => {
      this.seconds += 1;
      this.clockTick.play();
      if (this.seconds === 60) {
        this.minutes += 1;
        this.seconds = 0;
      }
      if (this.minutes === 60) {
        this.hours += 1;
        this.minutes = 0;
      }
      if (this.hours === 24) {
        this.hours = 0;
        this.minutes = 0;
        this.seconds =0;
        clearInterval(this.myInterval);
        this.started = false;
        this.canReset = false;
      }
    }, 1000);
  }
  pauseTimer() {
    this.mouseClick.play();
    this.started = false;
    clearInterval(this.myInterval);
  }
  resetTimer() {
    this.mouseClick.play();
    clearInterval(this.myInterval);
    this.canReset = false;
    this.started = false;
    this.seconds = 0;
    this.minutes = 0;
  }
}
