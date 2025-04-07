import { Component, ElementRef, viewChild, ViewChild, viewChildren } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  //@ViewChild('form') form?: ElementRef<HTMLFormElement>;

  // "viewChild.required" é o novo jeito de acessar elementos do HTML (tipo @ViewChild, mas melhor).
  // Aqui estamos pegando o <form> lá do HTML para poder resetá-lo depois.
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');


  onSubmit(title: string, ticketText: string){

    console.log(title);
    console.log(ticketText);
    this.form().nativeElement.reset();
  }
}
