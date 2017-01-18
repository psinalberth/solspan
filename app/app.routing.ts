import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { UsuarioOverviewComponent } from './usuarios/usuario-overview.component';
import { SolicitacaoComponent} from './solicitacoes/solicitacao.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'solicitacoes', component: SolicitacaoComponent},
  {path: 'usuarios', component: UsuarioOverviewComponent}
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
