import { Component } from '@angular/core';
import { FornecedorService } from '../fornecedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fornecedor-listar',
  templateUrl: './fornecedor-listar.component.html',
  styleUrls: ['./fornecedor-listar.component.scss']
})
export class FornecedorListarComponent {
  public dados:Array<any> = [];

  constructor(
    public fornecedor_service: FornecedorService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.fornecedor_service.listar()
    .on('value', (snapshot:any)=>{
      this.dados.splice(0,this.dados.length);

      let response = snapshot.val();

      if (response == null) return;

      Object.values( response )
      .forEach(
        (e:any,i:number) => {

          this.dados.push({
            nmFantasia: e.nmFantasia,
            cnpj: e.cnpj,
            indice: Object.keys(snapshot.val())[i]
          });
        }
      );
    });
  }

  excluir(key:string){
    this.fornecedor_service.excluir(key);
  }

  editar(key:string) {
    this.router.navigate(['/fornecedor/form/' + key]);
  }
}
