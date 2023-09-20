import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.scss']
})
export class ClienteListarComponent {

  public dados:Array<any> = [];

  constructor(
    public cliente_service: ClienteService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.cliente_service.listar()
    .on('value', (snapshot:any)=>{
      this.dados.splice(0,this.dados.length);

      let response = snapshot.val();
      if (response == null) return;

      Object.values( response )
      .forEach(
        (e:any,i:number) => {
          
          this.dados.push({
            nome: e.nome,
            cpf: e.cpf,
            indice: Object.keys(snapshot.val())[i]
          });
        }
      );
    });
  }

  excluir(key:string){
    this.cliente_service.excluir(key);
  }

  editar(key:string) {
    this.router.navigate(['/cliente/form/' + key]);
  }

}
