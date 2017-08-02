import { AlunosGuard } from './guards/alunos.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AuthGuard } from './guards/auth.guard';

// import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from "app/app.routing.module";

import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosService } from './cursos/cursos.service';
import { AuthService } from "app/login/auth.service";
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursosComponent } from './cursos/cursos.component';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
//import { CursosModule } from "app/cursos/cursos.module";

// import { CursosRoutingModule } from "app/cursos/cursos.routing.module";
// import { AlunosModule } from "app/alunos/alunos.module";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   // CursosComponent,
    LoginComponent,
   PaginaNaoEncontradaComponent
    // CursoDetalheComponent,
    //CursoNaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,    
   //  CursosModule,   RETIRADO POR CONTA DO LAZY LOADING (Esse módulo será carregado qdo a rota for chamada)
    HttpModule,
    FormsModule,
    // AlunosModule, RETIRADO POR CONTA DO LAZY LOADING

    //CursosRoutingModule,
    AppRoutingModule    
        //routing
  ],
  providers: [AuthService, AuthGuard, CursosGuard , AlunosGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
