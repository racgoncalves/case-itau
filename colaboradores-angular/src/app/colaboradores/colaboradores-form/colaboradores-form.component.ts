import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { Colaborador } from '../colaborador';
import { ColaboradoresService } from '../../colaboradores.service'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-colaboradores-form',
  templateUrl: './colaboradores-form.component.html',
  styleUrls: ['./colaboradores-form.component.css']
})

export class ColaboradoresFormComponent implements OnInit {

  colaborador: Colaborador;
  success: boolean = false;
  colaboradorId: string;

  constructor(
    private service: ColaboradoresService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ) { 
    this.colaborador = new Colaborador();
  }

  ngOnInit(): void {

    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams => {
      this.colaboradorId = urlParams['colaboradorId'];
      if(this.colaboradorId){
        this.service
          .getColaboradorById(this.colaboradorId)
          .subscribe( 
            response => this.colaborador = response
          )
      }
    })
  }

  onSubmit(){
    if(this.colaborador.nome == null)
        Swal.fire({
          icon: 'error',
          title: 'Nome é Obrigatório!',
        })
    else if(this.colaborador.email == null)
      Swal.fire({
        icon: 'error',
        title: 'E-mail é Obrigatório!',
      })
    else if(this.colaborador.email.indexOf('@') == -1)
      Swal.fire({
        icon: 'error',
        title: 'E-mail inválido!',
      })

    else{

      if(this.colaboradorId){
        this.service
          .atualizar(this.colaborador)
          .subscribe(response => {
            this.success = true;
        })
      
      }else{
        this.service
        .salvar(this.colaborador)
        .subscribe( 
          response => { 
            this.success = true;
        })
      }
    }  
  }

  voltarParaListagem(){
    this.router.navigate(['/colaboradores-lista'])
  }

}
