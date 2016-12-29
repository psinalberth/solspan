import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { LoginComponent } from './login/login.component';
import { UsuarioListComponent } from './usuarios/usuario-list.component';
import { UsuarioDetailComponent } from './usuarios/usuario-detail.component';
import { UsuarioOverviewComponent } from './usuarios/usuario-overview.component';
import { SolicitacaoComponent} from './solicitacoes/solicitacao.component';
import { HeroDetailComponent } from './hero-detail.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'solicitacoes', component: SolicitacaoComponent},
  {path: 'usuarios', component: UsuarioOverviewComponent},
  {path: 'usuarios/add', component: UsuarioDetailComponent}
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
