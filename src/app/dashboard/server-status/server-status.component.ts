import { Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit{

  // Variável que armazena o status atual do servidor
  // Aceita apenas 3 valores específicos (tipo literal)

  currentStatus =  signal<'online' | 'offline' | 'unknown'>('online');

  // DestroyRef permite executar uma função quando o componente for destruído
  // Usado aqui para limpar o setInterval e evitar vazamento de memória
  private destroyRef = inject(DestroyRef);

  constructor(){
    effect(() => {
      console.log(this.currentStatus());
    });
    
  }

  // ngOnInit é chamado uma vez assim que o componente é inicializado
  ngOnInit(){
    console.log('ON INIT');

  // Cria um intervalo que simula alteração no status do servidor a cada 5 segundos
    const interval = setInterval(() => {
      const rnd = Math.random();

      if (rnd <0.5){
        this.currentStatus.set('online');
      } else if (rnd <0.9){
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);

    // Quando o componente for destruído, limpa o intervalo
    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    })
  }
  
  // ngAfterViewInit é chamado após o Angular terminar de renderizar a view do componente
  ngAfterViewInit(){
    console.log('AFTER VIEW INIT');
  }

}
