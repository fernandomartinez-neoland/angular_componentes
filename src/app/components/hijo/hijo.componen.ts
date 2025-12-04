import { Component, inject, Input, signal } from '@angular/core';
import { NietoComponen } from '../nieto/nieto.componen';
import { ConsolaService } from '../../service/consola.service';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [NietoComponen],
  templateUrl: './hijo.componen.html',
  styleUrl: './hijo.componen.css',
})
export class HijoComponen {
  constructor(private consoleService: ConsolaService) {
  }
  @Input() boolHijo: boolean = true;

  private consolaService = inject(ConsolaService);
  public readonly boolSignal = this.consolaService.switcher
  Cambiar() {
    console.log("este es el hijo", this.consoleService.switcher());
    this.consoleService.switcher.set(!this.consoleService.switcher());

  }

}
