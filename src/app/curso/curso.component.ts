import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css'],
})
export class CursoComponent implements OnInit {
  nome: string = 'Gil';

  //Construtor
  constructor() {}

  //Inicializador
  ngOnInit(): void {
    window.alert('Hello World');
  }
}
