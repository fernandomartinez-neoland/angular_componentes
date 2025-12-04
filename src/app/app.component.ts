import { Component, inject, signal } from '@angular/core';
import { ConsolaService } from './service/consola.service';
import { HijoComponen } from './components/hijo/hijo.componen';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HijoComponen],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export default class AppComponent {
  booleano = signal(true);
  saludo: string;
  switcher: boolean;
  private consolaService = inject(ConsolaService);
  public readonly servicioSwitcher = this.consolaService.switcher;
  constructor() {
    this.saludo = this.consolaService.saludo;
    this.switcher = this.consolaService.switcher();

  }


  nombre: string = "Pamela";
  arreglo = signal([
    'pepito',
    'fulanito',
    'manolito',
    'fulano'
  ])
  switch = signal(true);
  objeto = signal([
    {
      img: 'http://url',
      title: 'titulo'
    }
  ])

  saludar() {
    console.log(this.saludo)
    console.log(this.switcher)
    this.switcher = !this.switcher;
    console.log(this.switcher)
    this.consolaService.switcher.set(!this.consolaService.switcher());
    console.log('Switcher en Padre (leyendo Signal):', this.servicioSwitcher())
  }

  imprimir() {
    this.consolaService.imprimir(this.nombre);
  }
}
