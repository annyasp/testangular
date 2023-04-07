import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  time!: number;
  seconds!: number | string;
  minutes!: number;
  countDownEl: any;


  /**
   *
   */
  constructor() {   
  }
  
  ngOnInit(): void {
    this.time = 3600;
    this.seconds = 1;
    this.minutes = 1;

    
    
    
    
    setInterval(this.updateCountdown, 1000);
  }
  
  updateCountdown() {
    console.log(this.seconds);
    console.log(this.minutes);
    console.log(this.time);
      this.minutes = Math.floor(this.time / 60);
      this.seconds = this.time % 60; //без остатка деленное на 3600/60
      this.seconds = this.seconds <10 ? "0" + this.seconds : this.seconds;
      this.seconds; //чтобы после 10 секунд у цифр в переди стоял ноль
      this.countDownEl = `${this.minutes}:${this.seconds}`; 
      this.time--;//обратый отсчет тайм - 1
  }
}
