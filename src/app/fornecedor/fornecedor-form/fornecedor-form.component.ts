import { Component } from '@angular/core';
import { FornecedorService } from '../fornecedor.service';
import { ActivatedRoute } from '@angular/router';
import { EstadoService } from 'src/app/estado/estado.service';

@Component({
  selector: 'app-fornecedor-form',
  templateUrl: './fornecedor-form.component.html',
  styleUrls: ['./fornecedor-form.component.scss']
})
export class FornecedorFormComponent {

  public estados:Array<any> = [];
  public indice:string    = '';
  public nmFantasia:string = "";
  public logradouro:string = "";
  public rzSocial:string = "";
  public complemento:string = "";
  public cnpj:string = "";
  public bairro:string = "";
  public contato:string = "";
  public cidade:string = "";
  public email:string = "";
  public estado:string = "";

  constructor(
    public fornecedor_service:FornecedorService,
    public activated_route:ActivatedRoute,
    public estado_service:EstadoService
  ) {
    this.activated_route.params.subscribe( (params:any)=> {

      if(params.indice == undefined) return;

      this.fornecedor_service.ref().child('/' + params.indice).on('value', (snapshot:any) => {
        let dado:any   = snapshot.val();
        this.indice    = params.indice;
        this.nmFantasia  = dado.nmFantasia;
        this.logradouro  = dado.logradouro;
        this.rzSocial    = dado.rzSocial;
        this.complemento = dado.complemento;
        this.cnpj        = dado.cnpj;
        this.bairro      = dado.bairro;
        this.contato     = dado.contato;
        this.cidade      = dado.cidade;
        this.email       = dado.email;
        this.estado      = dado.estado;
      });
    });

    this.estado_service.listar()
    .once('value',(snapshot:any) => {
      let response = snapshot.val();

      if (response == null) return;

      Object.values( response )
      .forEach(
        (e:any,i:number) => {

          this.estados.push({
            sigla: e.sigla,
            indice: Object.keys(snapshot.val())[i]
          });
        }
      );

      
    });
  }

  salvar() {

    if(this.validarCampos()) {
      let dados = {
        nmFantasia : this.nmFantasia,
        logradouro : this.logradouro,
        rzSocial : this.rzSocial,
        complemento : this.complemento,
        cnpj : this.cnpj,
        bairro : this.bairro,
        contato : this.contato,
        cidade : this.cidade,
        email : this.email,
        estado : this.estado,
      };

      if (this.indice == ''){    
        this.fornecedor_service.salvar(dados);
      }else{
        this.fornecedor_service.editar(this.indice,dados);
      }
    } else {
      return;
    }
  }

  validarCampos() {

    let isEmpty:boolean = false;
    isEmpty = this.setCssClass('nmFantasia',this.nmFantasia === '');
    isEmpty = this.setCssClass('logradouro', this.logradouro === '');
    isEmpty = this.setCssClass('rzSocial',  this.rzSocial === '');
    isEmpty = this.setCssClass('complemento', this.complemento === '');
    isEmpty = this.setCssClass('cnpj', this.cnpj === '');
    isEmpty = this.setCssClass('bairro', this.bairro === '');
    isEmpty = this.setCssClass('contato', this.contato  === '');
    isEmpty = this.setCssClass('cidade', this.cidade === '');
    isEmpty = this.setCssClass('email', this.email === '');
    isEmpty = this.setCssClass('estado', this.estado === '');

    return isEmpty;
  }

  setCssClass(field: string, isEmpty: boolean) {
    const element = document.getElementById(field);
    if (element) {
      if (isEmpty) {
        element.classList.add('has-error');
        return true;
      } else {
        element.classList.remove('has-error');
        return false;
      }
    }
    return true;
  }
}


