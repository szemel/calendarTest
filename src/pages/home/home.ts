import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  public currentEvents = [
    {
      year: 2018,
      month: 9,
      date: 25,
      eventCSS:'red-one'
    },

  ];

  public counter = 0;

  addNewEvent()
  {
    let day = new Date();
    day.setDate(day.getDate()+this.counter);
    this.currentEvents.push({
      year: day.getFullYear(),
      month: day.getMonth(),
      date: day.getUTCDate(),
      eventCSS:'red-one'
    });
    this.counter++;
    //line below trigger ngOnChanges in calendar
    this.currentEvents.slice();
  }

}
