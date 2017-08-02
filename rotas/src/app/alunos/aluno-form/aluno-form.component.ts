import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Rx";
import { ActivatedRoute, Router } from "@angular/router";

import { AlunosService } from "app/alunos/alunos.service";
import { IFormCanDeactivate } from "app/guards/iform-candeactivate";

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, IFormCanDeactivate {

  private inscricao: Subscription;

  //idAluno: number;
  aluno;

  private formMudou: boolean = false;


  constructor(
    private _activatedRoute: ActivatedRoute, //i ActivatedRoute serve para pegar os dados da rota ativa
    private _router: Router, // o router serve para usar o navigate
    //com o activated route, eu me inscrevo nos parâmetros da rota e obtenho o que quiser
    private alunosService: AlunosService
  ) { }



  ngOnInit() {
    //inscrição no activated route para obter o id, que é o que a rota contém
    // não consigo pegar coisas além do id, q está na rota

    //console.log(this._activatedRoute);

    this.inscricao = this._activatedRoute.params.subscribe(
      (valor) => {
        let idAluno = valor['id'];
        this.aluno = this.alunosService.getAluno(idAluno);
      }
    );
  }

  ngOnDestroy() {
    //desinscrição no activated route
    this.inscricao.unsubscribe();
  }

  onInput(){
    this.formMudou = true;
    console.log('mudou');

  }

  podeDesativar(){
    if (this.formMudou) {
      return confirm('Tem certeza que deseja sair dessa página?');
      //se o usuário clicar em OK, retorna TRUE; caso contrário retorna FALSE

    }

  }
}
