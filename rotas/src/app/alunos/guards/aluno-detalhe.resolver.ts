// Essa guarda server para garantir que a consulta ajax ao servidor irá finalizar antes
// que o componente aluno detalhe seja renderizado, ou seja, que o serviço irá concluir seu papel
 

import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";

import { Aluno } from "app/alunos/aluno";
import { AlunosService } from "app/alunos/alunos.service";

@Injectable() // NÃO ESQUECER DE COLOCAR NO PROVIDER

export class AlunoDetalheResolver implements Resolve<Aluno> { 
    // Team é o tipo do objeto que será resolvido
    // Devo observar que preciso resolver um objeto do tipo Aluno. Ele que será consultado do server


// no construtor, irei usar o serviço alunosService. Preciso aplicar esse guarda enquanto o 
// serviço termina seu papel

    constructor(private _alunosService: AlunosService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<any>|Promise<any>|any {
    
            // Aqui eu trago a lógica do NgOnInit do aluno-detalhe.component.ts para que o resolver
            // carregue o objeto
            let idAluno = route.params['id'];


            console.log('Estou executando o resolver!');
            // estou pegando o id do aluno pela rota ativa, passando pro serviço carregar o aluno
            return this._alunosService.getAluno(idAluno);
            
            // depois disso, passo o resolve pra rota ':id'. Ou seja, quando o usuário clicar em um aluno
            // ele chama o guarda de rotas para carregar o aluno

            // Dúvida: e o serviço não faz mais o serviço de carregar o aluno?  NÃO!!!!
            // DEVO REMOVER O CODIGO DO NGONINIT        
    }
}



