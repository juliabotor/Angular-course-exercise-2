import { afterNextRender, afterRender, Component, contentChild, ContentChild, ElementRef, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host:{
    class: 'control',
    '(click)': 'onClick()',
  }
})
export class ControlComponent {
  //@HostBinding() className = 'control';
  label = input.required<string>();
  // Injeta o ElementRef para ter acesso direto ao DOM do componente
  private el = inject(ElementRef);
 // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control = 
  // contentChild é usado para acessar elementos <input> 
  // ou <textarea> que foram passados via <ng-content> no template.
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

    constructor(){
      // Executa após o Angular renderizar o componente na tela
      afterRender(() => {
        console.log('afterRender');
      });
      // Executa após a próxima renderização do Angular
      afterNextRender(()=> {
        console.log('afterNextRender');
      });
    }
  onClick(){
    console.log('Clicked!');
    console.log(this.el);
    console.log(this.control);
  }
  
}
