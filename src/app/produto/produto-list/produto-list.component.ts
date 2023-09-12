import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.scss']
})
export class ProdutoListComponent {
  public dados:Array<any> = [];

  constructor(
    public produto_service: ProdutoService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.produto_service.listar()
    .on('value', (snapshot:any)=> {
      this.dados.splice(0,this.dados.length);

      let response = snapshot.val();

      if(response == null) return;

      Object.values ( response )
      .forEach(
        (e:any, i:number) => {
          this.dados.push({
            nome:e.nome,
            email:e.email,
            indice:Object.keys(snapshot.val())[i]
          })
        }
      )
    })
  }

  excluir(key:string) {
    this.produto_service.excluir(key);
  }

  editar(key:string) {
    this.router.navigate(['/usuario/form/' + key]);
  }
}
