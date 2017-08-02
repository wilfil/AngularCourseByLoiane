import { CursosService } from '../cursos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: number;
  private inscription: Subscription;
  cursoSelecionado;

  constructor(private _activatedRoute: ActivatedRoute,
              private _cursosService: CursosService,
              private _router: Router      ) { 
    // a boa prática é usar o código do OnInit e Destroy.
    //this.id = this._activatedRoute.snapshot.params['id'];
    // Na linha acima, como se trata de um objeto e nem sempre o id esta dentro de value, uso a notação []
     // console.log(this._activatedRoute);

  }
  ngOnInit() { 
    //quero me inscrever no params pra escutar o que está acontecendo com ele
    this.inscription = this._activatedRoute.params.subscribe(
      (params) => {
        this.id = params['id'];
        this.cursoSelecionado = this._cursosService.getCurso(this.id);
        if (this.cursoSelecionado == null ) { //redirecionando a rota utilizando a classe router
          this._router.navigate(['/cursos/naoEncontrado']);          
    }

      }
    );
  }
  ngOnDestroy(){
    this.inscription.unsubscribe();

  }

}
