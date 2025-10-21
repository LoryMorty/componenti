import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Component1 } from './component1/component1';
import { Esercizio1 } from './esercizio1/esercizio1';
import { CommonModule } from '@angular/common';
import { Post } from './post/post';
import { Esercizio2 } from './esercizio2/esercizio2';
import { Esercizio3 } from './esercizio3/esercizio3';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Component1, Esercizio1, Esercizio2, Esercizio3, Post],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  posts = [
    { titolo: 'Ciao', testo: 'Benvenuto' },
    { titolo: 'Post lungo', testo: 'Questo testo è troppo lungo e non deve essere mostrato' },
    { titolo: 'Angular', testo: 'Fantastico!' }
  ];
}
