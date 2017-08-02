import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosService } from "app/cursos/cursos.service";
import { CursosComponent } from "app/cursos/cursos.component";
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CursoNaoEncontradoComponent } from "./curso-nao-encontrado/curso-nao-encontrado.component";
// import { RouterModule } from "@angular/router";  -> removi porque estou recebendo do 
// CursosRoutingModule
import { CursosRoutingModule } from "app/cursos/cursos.routing.module";


@NgModule({
    declarations: [
        CursosComponent,
        CursoDetalheComponent,
        CursoNaoEncontradoComponent        
    ],
    imports: [ 
        CommonModule,
        CursosRoutingModule
        //RouterModule
         ],
    exports: [  ],
    providers: [CursosService]
})
export class CursosModule {}