import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from './cursos.service';
import { Component, OnInit, Directive } from '@angular/core';



@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos = [];
  pagina: number;
  inscricao : Subscription;

  constructor(private _cursosService: CursosService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router  // Esse router é para usar o navigate e fazer a navegação pelas páginas
              ) {
 

               }

  proximaPagina() {
    this.pagina++;
    this._router.navigate(['/cursos'],{ queryParams:{'pagina': this.pagina}});

  }



  ngOnInit() {
  this.cursos = this._cursosService.getCursos();
   // console.log(this._activatedRoute);

  this.inscricao = this._activatedRoute.queryParams.subscribe(
   
    (nomeQueEuQuiser) => this.pagina = nomeQueEuQuiser['pagina']
  );

}
ngOnDestroy() {
  this.inscricao.unsubscribe();

}

}
