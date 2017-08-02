import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

    getCursos(){
    return [
      { id: 1, nome: 'Angular 2' },
      { id: 2, nome: 'Mongo DB' },
      { id: 3, nome: 'Express JS' }
    ];
  }

  getCurso(id: number) {
    /* return this.getCursos().filter( 
      (valor) => valor.id == id
    ); */
    // Essa função acima está retornando um objeto, e não um elemento de um array
   
     let cursos = this.getCursos();
    for( let i =0 ; i < cursos.length; i++ ){
      if (cursos[i].id == id)  return cursos[i];
    } return null;
   // nesse segundo caso ela está retornando direto o elemento do Array
}

  constructor() { }

}
