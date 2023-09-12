import { Component } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent {
  constructor(
    public firebase_service:FirebaseService) { }
  
    ref(){
      return this.firebase_service.ref().child('/produto')
    
    }
    salvar(dados:any) {
      this.ref().push(dados).then();
    }
  
    listar() {
      return this.ref();
    }
  
    excluir(indice:string){
      this
      .ref()
      .child('/' + indice)
      .remove()
      .then();
    }
  
    editar(indice:string,dados:any){
      this.ref().child('/' + indice)
      .update(dados)
      .then();
    }
}
