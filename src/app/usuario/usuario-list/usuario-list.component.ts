import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent {
  public dados:Array<any> = [];

  constructor(
    public usuario_service: UsuarioService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.usuario_service.listar()
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
    this.usuario_service.excluir(key);
  }

  editar(key:string) {
    this.router.navigate(['/usuario/form/' + key]);
  }
}
