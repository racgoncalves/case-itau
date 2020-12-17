import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { ColaboradoresService } from '../../colaboradores.service';
import { Colaborador } from '../colaborador';

@Component({
  selector: 'app-colaboradores-lista',
  templateUrl: './colaboradores-lista.component.html',
  styleUrls: ['./colaboradores-lista.component.css']
})

export class ColaboradoresListaComponent implements OnInit {

  colaboradores: Colaborador[] = [];
  colaboradorSelecionado: Colaborador;
  mensagem: string;

  constructor( 
    private service: ColaboradoresService, 
    private router: Router) {}

  ngOnInit(): void {
    this.service
    .getColaboradores()
    .subscribe( resposta => this.colaboradores = resposta );
  }

  novoCadastro(){
    this.router.navigate(['/colaboradores-form'])
  }

  preparaDelecao(colaborador : Colaborador){
    this.colaboradorSelecionado = colaborador;
  }

  deletarColaborador(){
    this.service
      .deletar(this.colaboradorSelecionado)
      .subscribe( 
        response => { 
          this.mensagem = 'Colaborador deletado com sucesso!'
          this.ngOnInit()
       })
  }

}
