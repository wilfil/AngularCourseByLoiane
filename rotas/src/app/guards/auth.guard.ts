import { AuthService } from 'app/login/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from "@angular/router";
import { Observable } from "rxjs";

//esse arquivo foi renomeado, incialmente ele era auth-guard.service.ts

@Injectable()

// o que faz essa classe ser um guarda de rotas é o fato dela implementar o CanActivate
export class AuthGuard implements CanActivate, CanLoad {

  // O CanLoad serve para que, mesmo logado, o usuário baixe um módulo de lazy loading
  // Ou seja, os que tem children.

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ): // abaixo é o que ele retorna Observable ou Promise
    boolean | Observable<boolean> | Promise<boolean> {
    //throw new Error("Method not implemented.");

    console.log('Estou chamando o AuthGuard!');
    return this.verificarAcesso();
   
  }

  private verificarAcesso() {
     
    // se retornar true, é porque o usuário pode acessar a rota
    if(this._authService.usuarioEstaAutenticado()) {
    return true; } else {
        // forçar o roteamento pra página de login
        this._router.navigate(['/login']);
        return false;      
    }
  }

	canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
   
    console.log('Verificando se o usuário pode carregar o código do Módulo');
    return this.verificarAcesso();
  }

  constructor(private _authService: AuthService,
              private _router: Router
          ) { }

}
