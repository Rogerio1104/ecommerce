import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { RequisicaoService } from '../requisicao.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    public firebase_service:FirebaseService,
    private requisicao_service:RequisicaoService
  ) { }

  ref () {
    return this.firebase_service.ref().child('/usuarios');
  }

  salvar(fd: any) {
    return this.requisicao_service.post(fd,'usuario')
  }

  listar() {
    return this.requisicao_service.get('usuario/listar');
  }

  excluir(_id: number){
  return this.requisicao_service.del('/usuario/' + _id);
  }

  editar(fd:any,id:number){
    return this.requisicao_service.put(fd,'usuario/' + id);
  }
  load(id:number){
    return this.requisicao_service.get('/usuario/load/' + id);
  }
}
