import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent {
  public indice:string    = '';
  public nome:string = "";
  public email:string = "";
  public senha:string = "";

  constructor(
    public usuario_service: UsuarioService,
    public activated_route:ActivatedRoute
  ) {
    this.activated_route.params.subscribe( (params:any)=> {
      if(params.indice == undefined) return;

      this.usuario_service.ref().child('/' + params.indice).on('value', (snapshot:any)=> {
        let dados:any  = snapshot.val();
        this.indice    = params.indice;
        //this.descricao = dados.descricao;
      });
    });
  }

  salvar() {
    let dados = {
      nome:this.nome,
      email:this.email,
      senha:this.senha
    }
console.log(dados)
    if(this.indice == '') {
      this.usuario_service.salvar(dados);
    } else {
      this.usuario_service.editar(this.indice,dados);
    }
  }
}
