import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Rx";

import { AlunosService } from "app/alunos/alunos.service";
import { Aluno } from "app/alunos/aluno";

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  private inscricao: Subscription;

  //idAluno: number;
  aluno: Aluno;


  constructor(
    private _activatedRoute: ActivatedRoute, //i ActivatedRoute serve para pegar os dados da rota ativa
    private _router: Router, // o router serve para usar o navigate
    //com o activated route, eu me inscrevo nos parâmetros da rota e obtenho o que quiser
    private _alunosService: AlunosService
  ) { }


  editarAluno() {
    //let aluno = this.aluno;
    this._router.navigate(['/alunos', this.aluno.id, 'edit']);
  }


  ngOnInit() {
    //inscrição no activated route para obter o id, que é o que a rota contém
    // não consigo pegar coisas além do id, q está na rota

    //console.log(this._activatedRoute);

  /* Esse código abaixo foi jogado pra dentro do resolver
    this.inscricao = this._activatedRoute.params.subscribe(
      (valor) => {
        let idAluno = valor['id'];
        this.aluno = this._alunosService.getAluno(idAluno);
      }
    ); */

    // E agora eu chamo o resolver...

    console.log('O NgOnInit do Aluno-detalhe.component.ts está sendo executado!');
  
    this.inscricao = this._activatedRoute.data.subscribe(
      (informacao: { aluno: Aluno }) => { 
        
        console.log('Recebendo o Objeto Aluno do Resolver!'); 
      // observemos que informacao retorna um objeto do tipo aluno, então..
      this.aluno = informacao.aluno; 
      // IMPORTANTE: Esse segundo informacao.aluno, é exatamente o retorno do resolver 
      // quando a guarda de rotas for chamada em alunos.routing.module
      // resolve: { aluno: AlunoDetalheResolver } -> linha 34 do arquivo de rotas
      }
    );
    


  }

  ngOnDestroy() {
    //desinscrição no activated route
    this.inscricao.unsubscribe();
  }

}
