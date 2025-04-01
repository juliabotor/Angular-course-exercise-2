import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { TicketsComponent } from './dashboard/tickets/tickets.component';
import { ItemComponent } from './dashboard/dashboard/item/item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent, 
    ServerStatusComponent, 
    TrafficComponent, 
    TicketsComponent, 
    ItemComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {

}
