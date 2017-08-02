
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

const cursosRoutes: Routes = [   
//    {  path: 'cursos', component: CursosComponent },
// Vou alterar a linha acima por conta do lazy loading

{  path: '', component: CursosComponent },  //linha que foi alterada no terceiro passo
    {  path: ':id', component: CursoDetalheComponent },
    {  path: 'naoEncontrado', component: CursoNaoEncontradoComponent }
];

// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
    declarations: [],
    imports: [ RouterModule.forChild(cursosRoutes) ],
    exports: [ RouterModule ]
})



export class CursosRoutingModule { }