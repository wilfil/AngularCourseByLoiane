import { Component, OnInit } from '@angular/core';

import { AlunosService } from "app/alunos/alunos.service";

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  private alunos: any[] = [];

  constructor(private _alunosService: AlunosService) { }

  ngOnInit() {
    this.alunos = this._alunosService.getAlunos();
    // console.log(this.alunos);

  }

}
