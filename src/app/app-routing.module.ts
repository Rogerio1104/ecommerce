import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { FormaPagamentoComponent } from './forma-pagamento/forma-pagamento.component';
import { HomeComponent } from './home/home.component';
import { CategoriaListarComponent } from './categoria/categoria-listar/categoria-listar.component';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';
import { FormaPagamentoFormComponent } from './forma-pagamento/forma-pagamento-form/forma-pagamento-form.component';
import { FormaPagamentoListarComponent } from './forma-pagamento/forma-pagamento-listar/forma-pagamento-listar.component';
import { SubcategoriaComponent } from './subcategoria/subcategoria.component';
import { SubcategoriaListComponent } from './subcategoria/subcategoria-list/subcategoria-list.component';
import { SubcategoriaFormComponent } from './subcategoria/subcategoria-form/subcategoria-form.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioListComponent } from './usuario/usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './usuario/usuario-form/usuario-form.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoListComponent } from './produto/produto-list/produto-list.component';
import { ProdutoFormComponent } from './produto/produto-form/produto-form.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';

const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'home', component:HomeComponent },
  { path:'categoria', component:CategoriaComponent, 
    children:[
      { path:'', redirectTo:'listar', pathMatch:'full' },
      { path:'listar', component:CategoriaListarComponent },
      { path:'form', component:CategoriaFormComponent },
      { path:'form/:indice', component:CategoriaFormComponent }

    ]
  },
  { path:'forma-pagamento', component:FormaPagamentoComponent,
    children:[
      { path:'', redirectTo:'listar', pathMatch:'full'},
      { path:'listar', component:FormaPagamentoListarComponent },
      { path:'form', component:FormaPagamentoFormComponent },
      { path:'form/:indice', component:FormaPagamentoFormComponent },
    ]
  },
  { path:'subcategoria', component:SubcategoriaComponent,
  children:[
    { path:'', redirectTo:'listar', pathMatch:'full'},
    { path:'listar', component:SubcategoriaListComponent },
    { path:'form', component:SubcategoriaFormComponent },
    { path:'form/:indice', component:SubcategoriaFormComponent },
  ]
},
{ path:'usuario', component:UsuarioComponent,
  children:[
    { path:'', redirectTo:'listar', pathMatch:'full'},
    { path:'listar', component:UsuarioListComponent },
    { path:'form', component:UsuarioFormComponent },
    { path:'form/:indice', component:UsuarioFormComponent },
  ]
},
{ path:'produto', component:ProdutoComponent,
  children:[
    { path:'', redirectTo:'listar', pathMatch:'full'},
    { path:'listar', component:ProdutoListComponent },
    { path:'form', component:ProdutoFormComponent },
    { path:'form/:indice', component:ProdutoFormComponent },
  ]
},
{ path:'cliente', component:ClienteComponent,
  children:[
    { path:'', redirectTo:'listar', pathMatch:'full'},
    { path:'listar', component:ClienteListComponent },
    { path:'form', component:ClienteFormComponent },
    { path:'form/:indice', component:ClienteFormComponent },
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
