import { Component, OnInit } from '@angular/core';

import { AuthService } from "app/login/auth.service";
import { Usuario } from "app/login/usuario";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario: Usuario = new Usuario();

  constructor(private _authService: AuthService) { 
     

  }

  ngOnInit() {
  }

  fazerLogin(){
    console.log(this.usuario);
    this._authService.fazerLoginNoServico(this.usuario);
  }

}
