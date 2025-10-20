import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-esercizio2',
  imports: [CommonModule],
  templateUrl: './esercizio2.html',
  styleUrl: './esercizio2.css'
})
export class Esercizio2 {

frutti = ['Mela', 'Pera', 'Banana', 'Arancia', 'Ananas'];
//aggiunge un nuovo elemento all’array
aggiungiFrutto(nuovo: string) {
const nome = nuovo.trim();
if (nome) {
this.frutti.push(nome);
}
}

//rimuove un frutto in base all’indice
rimuoviFrutto(indice: number) {
this.frutti.splice(indice, 1);
}
}