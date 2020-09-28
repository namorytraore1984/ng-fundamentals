import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyEvent } from 'src/app/data/envent';
import { EventService } from 'src/app/share/event-service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {


  public event: MyEvent;

  constructor(private eventSerives: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.event = this.eventSerives.getEventById(+this.route.snapshot.params['id']);
    
  }
}
