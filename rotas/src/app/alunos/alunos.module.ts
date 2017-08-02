import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { AlunosComponent } from "app/alunos/alunos.component";
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosRoutingModule } from "app/alunos/alunos.routing.module";
import { AlunosService } from "app/alunos/alunos.service";
import { AlunoDetalheResolver } from "app/alunos/guards/aluno-detalhe.resolver";


@NgModule({
    declarations: [
        AlunosComponent,
        AlunoFormComponent,
        AlunoDetalheComponent
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        AlunosRoutingModule
    ],
    exports: [ ],
    providers: [
                AlunosService , 
                AlunosDeactivateGuard,
                AlunoDetalheResolver
                ]
})
export class AlunosModule {}