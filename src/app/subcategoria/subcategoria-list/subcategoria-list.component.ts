import { Component } from '@angular/core';
import { SubcategoriaService } from '../subcategoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subcategoria-list',
  templateUrl: './subcategoria-list.component.html',
  styleUrls: ['./subcategoria-list.component.scss']
})
export class SubcategoriaListComponent {
  public dados:Array<any> = [];

  constructor(
    public subcategoria_service: SubcategoriaService,
    public router:Router
  ) {}

  ngOnInit(): void {
    this.subcategoria_service.listar()
    .on('value', (snapshot:any)=> {
      this.dados.splice(0,this.dados.length);

      let response = snapshot.val();

      if(response == null) return;

      Object.values ( response )
      .forEach(
        (e:any, i:number) => {
          this.dados.push({
            descricao:e.descricao,
            indice:Object.keys(snapshot.val())[i]
          })
        }
      )
    })
  }

  excluir(key:string) {
    this.subcategoria_service.excluir(key);
  }

  editar(key:string) {
    this.router.navigate(['/sub-categoria/form/' + key]);
  }
}
