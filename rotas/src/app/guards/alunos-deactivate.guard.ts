
import { AlunoFormComponent } from 'app/alunos/aluno-form/aluno-form.component';

import { Observable } from 'rxjs';
import { Component } from '@angular/core';

import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

import { IFormCanDeactivate } from "app/guards/iform-candeactivate";

export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {

    // Será implementado um guarda de desativação de rotas, para o AlunoFormComponent
    // bastante útil para forms

    canDeactivate(
        component: IFormCanDeactivate, // passo para o candeactivate o form! 
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot 
       // nextState?: RouterStateSnapshot
        ): 
        boolean | Observable<boolean> | Promise<boolean> {
          //  console.log("Estou verificando rota de desativação!");
           
         //  console.log(component.podeMudarRota());
           return component.podeDesativar();


        // ao invés de chamar um atributo, posso chamar uma função
        //  return !component.formMudou; 
        // throw new Error("Method not implemented.");
    }

}