import { Injectable } from '@angular/core';
import { Aluno } from "app/alunos/aluno";

@Injectable()
export class AlunosService {
  
  private alunos: Aluno[] = [ // a variável aluno agora é um array de objetos tipo Aluno
    {id:1, nome:'Aluno 01', email: 'aluno01@email.com'},
    {id:2, nome:'Aluno 02', email: 'aluno02@email.com'},
    {id:3, nome:'Aluno 03', email: 'aluno03@email.com'}
  ];
  
  getAlunos(){
    return this.alunos;     
  }

  getAluno(idAluno) {
    // Trata-se de um array de objeto a ser varrido por um for; Se usar o filter, retorna um object
    for (var index = 0; index < this.alunos.length; index++) {
      if( this.alunos[index].id == idAluno ) {
        console.log(this.alunos[index]);
        return this.alunos[index];
      }      
    }
    
    return null;
  }



  constructor() { }



}
