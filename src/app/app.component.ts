import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export default class AppComponent {
  arreglo = signal([
    'pepito',
    'fulanito',
    'manolito',
    'fulano'
  ])
  switch = signal(true);

}
