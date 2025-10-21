import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-esercizio3',
  imports: [CommonModule, FormsModule],
  templateUrl: './esercizio3.html',
  styleUrl: './esercizio3.css'
})
export class Esercizio3 {
  studenti = [
    { nome: 'Luca', voto: 8 },
    { nome: 'Giulia', voto: 7 },
    { nome: 'Marco', voto: 9 }
  ];

  nuovoNome: string = '';
  nuovoVoto: number | null = null;

  aggiungiStudente() {
    if (this.nuovoNome && this.nuovoVoto !== null) {
      this.studenti.push({ nome: this.nuovoNome, voto: this.nuovoVoto });
      this.nuovoNome = '';
      this.nuovoVoto = null;
    }
  }

  eliminaStudente(index: number) {
    this.studenti.splice(index, 1);
  }
}
