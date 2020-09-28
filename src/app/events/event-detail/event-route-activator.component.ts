import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { EventService } from 'src/app/share/event-service';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorComponent implements OnInit, CanActivate {

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit() {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {

    const eventExist = !!this.eventService.getEventById(+route.params['id']);
    if (!eventExist) {
      this.router.navigate(['/404']);
    }
    return eventExist;
  }

}
