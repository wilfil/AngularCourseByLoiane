
import { AlunosGuard } from './../guards/alunos.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import { AlunosComponent } from "app/alunos/alunos.component";
import { AlunoDetalheComponent } from "app/alunos/aluno-detalhe/aluno-detalhe.component";
import { AlunoFormComponent } from "app/alunos/aluno-form/aluno-form.component";
import { AlunosDeactivateGuard } from "app/guards/alunos-deactivate.guard";
import { AlunoDetalheResolver } from "app/alunos/guards/aluno-detalhe.resolver";

/* Observemos que nesse caso ele roteia de um componente de Alunos pra Outros componentes
const alunosRoutes: Routes = [
    {  path: 'alunos', component: AlunosComponent },
    {  path: 'alunos/novo', component: AlunoFormComponent },
    {  path: 'alunos/:id', component: AlunoDetalheComponent },
    {  path: 'alunos/:id/edit', component: AlunoFormComponent }
]; 
*/

// Utilizando rotas filhas, renderizo a rota pai e a filha. Ou seja: Alunos, e o outro componente!
// Declarar da maneira de cima ou de baixo, depende da necessidade do projeto
const alunosRoutes: Routes = [ 
    {  path: '', component: AlunosComponent, 
    
        canActivateChild: [AlunosGuard], // se eu colocar o guarda aqui, ele chama na hora de acionar um filhote
        
        children: [  // aqui eu informo que ele tem filhos
       //deixei vazio acima por conta do lazy loading. Se fosse normal, preencheria com alunos
       
        {  path: 'novo', component: AlunoFormComponent },
        {  path: ':id', component: AlunoDetalheComponent,
            resolve: { aluno: AlunoDetalheResolver }    // adicionado após implementar o guarda resolver. "aluno" poderia ter qualquer nome
        },
        {  path: ':id/edit', component: AlunoFormComponent, canDeactivate: [AlunosDeactivateGuard] }
    ]}
];  // observermos que nas rotas filhas não preciso colocar alunos/novo


// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
    declarations: [],
    imports: [ RouterModule.forChild(alunosRoutes) ],
    exports: [ RouterModule ]
})

export class AlunosRoutingModule {}