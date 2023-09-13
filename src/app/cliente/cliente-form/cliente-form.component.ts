import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent {

  public indice:string    = '';
  public nome:string = '';
  public cpf:string = '';
  public dtnasci:string = '';
  public celular:string = '';
  public email:string = '';
  
  constructor(
    public cliente_service:ClienteService
  ){}  
  salvar(){
    let dados = {
      nome:this.nome,
      cpf:this.cpf,
      dtnasci:this.dtnasci,
      celular:this.celular,
      email:this.email
    };
    console.log(dados)
    if (dados.nome == ''){
      document.querySelector('#nome')
      ?.classList.add('has-error');
      return;
    }

    if (this.indice == ''){    
      this.cliente_service.salvar(dados);
    }else{
      this.cliente_service.editar(this.indice,dados);
    }
    //this.descricao = '';
  } 
}
