import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConsolaService {
  saludo = "hola"

  switcher = signal(true);
  imprimir(nombre: string) {
    console.log(this.saludo + ' ' + nombre);
  }
}
