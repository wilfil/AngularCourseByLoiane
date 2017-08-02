import { AlunosGuard } from './guards/alunos.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Component, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaginaNaoEncontradaComponent } from "app/pagina-nao-encontrada/pagina-nao-encontrada.component";
//import { CursosComponent } from './cursos/cursos.component';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';

/* Neste exemplo, antes da aula 62, os módulos estão sendo todos carregados 
const appRoutes: Routes = [
    {  path: '', component: HomeComponent },
   // {  path: 'cursos', component: CursosComponent },
   // {  path: 'curso/:id', component: CursoDetalheComponent },
    {  path: 'login', component: LoginComponent },
  //  {  path: 'naoEncontrado', component: CursoNaoEncontradoComponent }


]; 

*/
//A ideia é carregar módulos sob demanda:

const appRoutes: Routes = [

  //devo observar que no lazy loading, nessa rota que tem filhotes eu não carrego o componente, mas o módulo
  {
    path: 'cursos',
    loadChildren: 'app/cursos/cursos.module#CursosModule',
    canActivate: [AuthGuard],  // é necessário colocar o AuthGuard no providers do app module com escopo global
    canActivateChild: [CursosGuard],
    canLoad: [AuthGuard] // aplico a todos os caminhos onde há lazyload, load children
    // Se não usar o CanLoad, o código fonte desse módulo cursos vai aparecer na aba network do dev tools
  },
  // Agora estou no arquivo de rotas principal indicando o módulo do filhote e antes a informação não era necessária
  // preciso fazer isso com o ng-serve parado. São 3 passos: colocar a linha acima, 
  // No segundo passo, NÃO PODE haver importação do CursosModule em mais nenhum lugar da aplicação!
  // No terceiro passo, como eu READICIONEI o path de cursos aqui, preciso retirar da rota do módulo cursos.routing

  {
    path: 'alunos',
    loadChildren: 'app/alunos/alunos.module#AlunosModule',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
    // canActivateChild: [AlunosGuard]   -> posso adicionar direto na rota filha, dentro do modulo
  },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]  },

  // E se eu não quiser deixar o caminho absoluto http://localhost:4200/ configurado?
  // { path: '', component: HomeComponent , canActivate: [AuthGuard] }, 

  // uso um redirect

  { path: '', redirectTo: '/home', pathMatch: 'full' }, //patchmatch full compara tudo


  { path: '**', component: PaginaNaoEncontradaComponent, canActivate: [AuthGuard] } //WildCard

];

// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes, { useHash: true})], //esse hash serve para muitos back-ends - php e etc..
  exports: [RouterModule]
})

export class AppRoutingModule { }