import { Component, Input, OnInit } from '@angular/core';
import { MyEvent } from 'src/app/data/envent';

@Component({
  selector: 'app-event-thumnail',
  templateUrl: './event-thumnail.component.html',
  styleUrls: ['./event-thumnail.component.css']
})
export class EventThumnailComponent implements OnInit {


@Input() myEvent : MyEvent;

  constructor() { }

  ngOnInit() {
  }

  logTest(name: string): void {
    console.log('I am a child compo', name);
  }

  earlyStartClasses1() {
    const isToAdd = this.myEvent.time === '8:00 am'; 
    return {
      red: isToAdd,
      bold: isToAdd
    }
  }

  earlyStartClasses2() {
    if (this.myEvent.time === '8:00 am') {
      return ['red', 'bold'];
    } 
    else {
      return [];
    }
  }

  earlyStartClasses3() {
    if (this.myEvent.time === '8:00 am') {
      return 'red bold';
    } 
    else {
      return '';
    }
  }

}
