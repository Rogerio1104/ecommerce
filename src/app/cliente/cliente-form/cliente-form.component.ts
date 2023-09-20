import { Component, ViewChild } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent {

  @ViewChild('meuForm') meuForm: NgForm | undefined;
  
  public indice:string= '';
  public nome:string = '';
  public cpf:string = '';
  public dtnascimento:string = '';
  public celular:string = '';
  public email:string = '';

  constructor(
    public cliente_service:ClienteService,
    public activated_route:ActivatedRoute
  ) {
    this.activated_route.params.subscribe( (params:any)=> {
      //Caso seja um registro novo interromper a busca de dados 
      if(params.indice == undefined) return;

      this.cliente_service.ref().child('/' + params.indice).on('value', (snapshot:any) => {
        let dado:any   = snapshot.val();
        this.indice    = params.indice;
        this.nome      = dado.descricao;
        this.cpf       = dado.cpf;
        this.dtnascimento = dado.dtnascimento;
        this.celular      = dado.celular;
        this.email        = dado.email;
      });
    });
  }

  salvar() {

    if(this.validarCampos()) {
      let dados = {
        nome:this.nome,
        cpf:this.cpf,
        dtnascimento:this.dtnascimento,
        celular:this.celular,
        email:this.email,
      };

      if (this.indice == ''){    
        this.cliente_service.salvar(dados);
      }else{
        this.cliente_service.editar(this.indice,dados);
      }
      
    } else {
      return;
    }

  }

  validarCampos() {
    let isEmpty:boolean = false;
    isEmpty = this.setCssClass('nome', this.nome === '');
    isEmpty = this.setCssClass('cpf', this.cpf === '');
    isEmpty = this.setCssClass('dtnascimento', this.dtnascimento === '');
    isEmpty = this.setCssClass('celular', this.celular === '');
    isEmpty = this.setCssClass('email', this.email === '');

    return isEmpty;
  }

  setCssClass(field: string, isEmpty: boolean) {
    const element = document.getElementById(field);
    if (element) {
      if (isEmpty) {
        element.classList.add('has-error');
        return true;
      } else {
        element.classList.remove('has-error');
        return false;
      }
    }
    return true;
  }
}
