import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, output, Output, viewChild, ViewChild, viewChildren } from '@angular/core';
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
export class NewTicketComponent implements AfterViewInit{
  //@ViewChild('form') form?: ElementRef<HTMLFormElement>;

  // "viewChild.required" é o novo jeito de acessar elementos do HTML (tipo @ViewChild, mas melhor).
  // Aqui estamos pegando o <form> lá do HTML para poder resetá-lo depois.
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  //garante que terá acesso aos elementos que foram selecionados com o viewchild
  add = output<{title: string; text: string}>();

  ngAfterViewInit(): void {
      console.log('AFTER VIEW INIT');
      console.log(this.form().nativeElement);
  }

  onSubmit(title: string, ticketText: string){
    this.add.emit({title: title, text: ticketText})
    console.log(title);
    console.log(ticketText);
    this.form().nativeElement.reset();
  }
}
