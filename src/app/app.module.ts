import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { EventsListComponent } from './events/events-list/events-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ToastrService } from './data/common/toastr-service';
import { RoutingModule } from './routing/routing.module';
import { EventThumnailComponent } from './events/event-thumnail/event-thumnail.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { EventRouteActivatorComponent } from './events/event-detail/event-route-activator.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumnailComponent,
    NavBarComponent,
    EventDetailComponent,
    CreateEventComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [
    ToastrService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Code peut etre declaré dans son propre fichier
export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not save this item, Are you you want to leave ?');
  } else {
    return true;
  }
}
