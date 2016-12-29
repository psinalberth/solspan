import {Routes, RouterModule} from '@angular/router';

import {PerfilListComponent} from './perfil-list.component';
import {PerfilDetailComponent} from './perfil-detail.component';

const perfilRoutes: Routes = [

	{path: 'perfis', component: PerfilListComponent, pathMatch: 'full'},
	{path: 'perfis/add', component: PerfilDetailComponent}
];

export const perfilRouting = RouterModule.forChild(perfilRoutes);