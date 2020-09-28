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
    // de facon synchrone
    //this.events = this.getEventsSync();

    // de facon asynchrone
    this.getEventsASync().subscribe(
      {
        next : events => this.events = events
      }
    );
  }

  detailClick(eventName: string): void {
    this.toastrService.success(eventName);
  }

  getEventsSync(): MyEvent[] {
    console.log('Donnees recuperés de facon synchrone');
    return this.events = this.eventService.getEventsSync();
  }

  getEventsASync(): Observable<MyEvent[]> {
    console.log('Donnees recuperés de facon asynchrone');
    return this.eventService.getEventsAsync();
  }

}
