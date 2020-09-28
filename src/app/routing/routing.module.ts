import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { EventsListComponent } from '../events/events-list/events-list.component';
import { EventDetailComponent } from '../events/event-detail/event-detail.component';
import { CreateEventComponent } from '../events/create-event/create-event.component';
import { NotFoundComponent } from '../errors/not-found/not-found.component';
import { EventRouteActivatorComponent } from '../events/event-detail/event-route-activator.component';


const routes: Routes = [
  {path: 'events/new', component: CreateEventComponent},
  {path: 'events', component: EventsListComponent},
  {path: 'events/:id', component: EventDetailComponent, canActivate: [EventRouteActivatorComponent]},
  {path: '404', component: NotFoundComponent},
  {path: '', redirectTo: '/events', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
