import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastrService } from 'src/app/data/common/toastr-service';
import { MyEvent } from 'src/app/data/envent';
import { FakeData } from 'src/app/data/fake-data';
import { EventService } from 'src/app/share/event-service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  event = {
    id: 1,
    name: 'Angular connect',
    date: '9/26/2020',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  };

  events : MyEvent[];

  constructor(private eventService : EventService, private toastrService: ToastrService) { }

  ngOnInit() {
    //this.events = FakeData.getEvents();
    this.events = this.eventService.getEventsSync();
  }

  getEvents(): Observable<MyEvent[]> {
    return this.eventService.getEventsAsync();
  }

  detailClick(eventName: string): void {
    this.toastrService.success(eventName);
  }

}
