import { Component, ElementRef, inject, input, ViewEncapsulation } from '@angular/core';

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

  onClick(){
    console.log('Clicked!');
    console.log(this.el);
  }
  
}
