import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PolymerElement } from '@vaadin/angular2-polymer';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import {UsuarioService} from './usuarios/usuario.service';
import { LoginComponent } from './login/login.component';
import { UsuarioListComponent } from './usuarios/usuario-list.component';
import { UsuarioOverviewComponent } from './usuarios/usuario-overview.component';
import { UsuarioDetailComponent } from './usuarios/usuario-detail.component';
import { SolicitacaoComponent } from './solicitacoes/solicitacao.component';
import { routing, appRoutingProviders } from './app.routing';
import {HttpModule, JsonpModule} from '@angular/http';

import {PerfilModule} from './perfis/perfil.module';
import {perfilRouting} from './perfis/perfil.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    PerfilModule,
    perfilRouting,
    routing
  ],
  declarations: [
    AppComponent,
    PolymerElement('app-header-layout'),
    PolymerElement('app-header'),
    PolymerElement('app-toolbar'),
    PolymerElement('paper-icon-button'),
    PolymerElement('vaadin-grid'),
    SolicitacaoComponent,
    LoginComponent,
    UsuarioListComponent,
    UsuarioOverviewComponent,
    UsuarioDetailComponent,
    PolymerElement('paper-input'),
    PolymerElement('vaadin-date-picker'),
    PolymerElement('paper-drawer-panel'),
    PolymerElement('vaadin-combo-box'),
    PolymerElement('paper-toolbar'),
    PolymerElement('paper-dialog')
  ],
  providers: [
    UsuarioService,
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
