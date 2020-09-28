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

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumnailComponent,
    NavBarComponent,
    EventDetailComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
