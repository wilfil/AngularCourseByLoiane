import { Subscription } from 'rxjs/Rx';

import { AuthService } from 'app/login/auth.service';

import { Component, EventEmitter, OnInit } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent implements OnInit {

  mostrarMenu : boolean = false;  // ela vai receber o que foi emitido
  inscricao: Subscription;

//vou inicializar um construtor para poder pegar o evento que foi emitido
  constructor(private _authService: AuthService) { }


// Abaixo eu me inscrevo na variável que está sendo emitida pelo serviço de autenticação e posso utilizá-la no 
// template pra fazer um ngIf
ngOnInit() {
  this.inscricao = this._authService.mostrarMenuEmitter.subscribe(
    (valor) => this.mostrarMenu = valor
  );
}

ngOnDestroy() {
  this.inscricao.unsubscribe;
}

  
 
  
}
