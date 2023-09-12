import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaListarComponent } from './categoria/categoria-listar/categoria-listar.component';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';
import { FormsModule } from '@angular/forms';
import { FormaPagamentoComponent } from './forma-pagamento/forma-pagamento.component';
import { FormaPagamentoListarComponent } from './forma-pagamento/forma-pagamento-listar/forma-pagamento-listar.component';
import { FormaPagamentoFormComponent } from './forma-pagamento/forma-pagamento-form/forma-pagamento-form.component';
import { SubcategoriaComponent } from './subcategoria/subcategoria.component';
import { SubcategoriaFormComponent } from './subcategoria/subcategoria-form/subcategoria-form.component';
import { SubcategoriaListComponent } from './subcategoria/subcategoria-list/subcategoria-list.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioListComponent } from './usuario/usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './usuario/usuario-form/usuario-form.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoFormComponent } from './produto/produto-form/produto-form.component';
import { ProdutoListComponent } from './produto/produto-list/produto-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    CategoriaComponent,
    CategoriaListarComponent,
    CategoriaFormComponent,
    FormaPagamentoComponent,
    FormaPagamentoListarComponent,
    FormaPagamentoFormComponent,
    SubcategoriaComponent,
    SubcategoriaFormComponent,
    SubcategoriaListComponent,
    UsuarioComponent,
    UsuarioListComponent,
    UsuarioFormComponent,
    ProdutoComponent,
    ProdutoFormComponent,
    ProdutoListComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDWdr1EtJADmqXh4Mk6owTSNvVC06OGeVQ",
      authDomain: "ecommerce-900f5.firebaseapp.com",
      databaseURL: "https://ecommerce-900f5-default-rtdb.firebaseio.com",
      projectId: "ecommerce-900f5",
      storageBucket: "ecommerce-900f5.appspot.com",
      messagingSenderId: "707874434454",
      appId: "1:707874434454:web:62ca3d52ebad3bbe9881b7",
      measurementId: "G-SKDF19S665"
    }),
    AngularFireStorageModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
