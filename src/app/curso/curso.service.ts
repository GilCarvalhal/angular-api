import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from './curso';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  //URL
  url = 'http://localhost/api/php/';

  //Vetor
  vetor: Curso[] = [];

  //Construtor
  constructor(private http: HttpClient) {}

  //Obter todos os cursos
  obterCursos(): Observable<Curso[]> {
    return this.http.get(this.url + 'listar').pipe(
      map((res: any) => {
        this.vetor = res['cursos'];
        return this.vetor;
      })
    );
  }

  //Cadastrar curso
  cadastrarCurso(c: Curso): Observable<Curso[]> {
    return this.http.post(this.url + 'cadastrar', { curos: c }).pipe(
      map((res: any) => {
        this.vetor.push(res['cursos']);
        return this.vetor;
      })
    );
  }
}
