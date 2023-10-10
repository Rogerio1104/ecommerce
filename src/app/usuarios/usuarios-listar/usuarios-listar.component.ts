import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios-listar',
  templateUrl: './usuarios-listar.component.html',
  styleUrls: ['./usuarios-listar.component.scss']
})
export class UsuariosListarComponent  implements OnInit{
  public dados :Array <any> = [];

  constructor(
    public usuarios_service: UsuariosService,
    public router: Router
  ) {}
 
  ngOnInit(): void {
      this.listar();
  }

  /*ngOnInit(): void {
    this.usuarios_service.listar()
    .on('value', (snapshot:any)=>{
      // Limpa variavel local com os dados
      this.dados.splice(0,this.dados.length);

      // Dados retornados do Firebase
      let response = snapshot.val();

      // Não setar valores caso não venha
      // nenhum registro
      if (response == null) return;

      // Percorre a coleção de dados 
      Object.values( response )
      .forEach(
        (e:any,i:number) => {
          // Adiciona os elementos no vetor
          // de dados
          this.dados.push({
            nome: e.nome,
            email:e.email,
            indice: Object.keys(snapshot.val())[i]
          });
        }
      );
    });
  }
*/
listar(){
  this.usuarios_service.listar().subscribe((_dados : any) =>{ this.dados = _dados;});
}

  excluir(_id: number){
    return this.usuarios_service.excluir(_id).subscribe(()=>{this.listar();});
  }

  editar(key:string) {
    this.router.navigate(['/usuarios/form/' + key]);
  }
}
