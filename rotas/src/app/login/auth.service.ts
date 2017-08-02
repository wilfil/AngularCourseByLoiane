import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from "app/login/usuario";

import { Router } from "@angular/router";

@Injectable()
export class AuthService {

  private ususarioAutenticado: boolean = false;  // se for true, mostra o menu ( usuário logado )

  mostrarMenuEmitter = new EventEmitter();  //usamos esse emissor de eventos para mostrar
  //ao app.component se é pra mostrar o menu ou não. Lá haverá um subscription

  constructor(private _router: Router) { }

  fazerLoginNoServico (usuario: Usuario) {
    if(usuario.nome === 'usuario@email.com' && usuario.senha === '123') {
        this.ususarioAutenticado = true;
        this.mostrarMenuEmitter.emit(true); // emito o valor de true, a ser escutado pelo subscription
        console.log('usuario autenticado com sucesso!');
        this._router.navigate(['/']);

    } else {
       this.ususarioAutenticado = false;
       this.mostrarMenuEmitter.emit(false);
       console.log('falha na autenticacao');
      }

  }

  usuarioEstaAutenticado() {
    return this.ususarioAutenticado;
  }


}
