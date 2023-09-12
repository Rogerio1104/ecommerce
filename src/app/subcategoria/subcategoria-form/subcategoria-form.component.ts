import { Component } from '@angular/core';
import { SubcategoriaService } from '../subcategoria.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subcategoria-form',
  templateUrl: './subcategoria-form.component.html',
  styleUrls: ['./subcategoria-form.component.scss']
})
export class SubcategoriaFormComponent {
  public indice:string    = '';
  public descricao:string = "";

  constructor(
    public subcategoria_service: SubcategoriaService,
    public activated_route:ActivatedRoute
  ) {
    this.activated_route.params.subscribe( (params:any)=> {
      if(params.indice == undefined) return;

      this.subcategoria_service.ref().child('/' + params.indice).on('value', (snapshot:any)=> {
        let dados:any  = snapshot.val();
        this.indice    = params.indice;
        this.descricao = dados.descricao;
      });
    });
  }

  salvar() {
    let dados = {
      descricao:this.descricao
    }

    if(this.indice == '') {
      this.subcategoria_service.salvar(dados);
    } else {
      this.subcategoria_service.editar(this.indice,dados);
    }
  }
  
}
