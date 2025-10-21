import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component1',
  imports: [],
  templateUrl: './component1.html',
  styleUrl: './component1.css'
})
export class Component1 {
  @Input() testo = ''; //può ricevere dati dal padre
}
