import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  // Recebe um objeto contendo src e alt da imagem como input obrigatório
  @Input({ required: true }) image!: { src: string; alt: string };
  // Recebe o título como input obrigatório
  @Input({ required: true }) title!: string;
}
