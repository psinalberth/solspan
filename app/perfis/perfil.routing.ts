import {Routes, RouterModule} from '@angular/router';

import {PerfilOverviewComponent} from './perfil-overview.component';

const perfilRoutes: Routes = [

	{path: 'perfis', component: PerfilOverviewComponent, pathMatch: 'full'}
];

export const perfilRouting = RouterModule.forChild(perfilRoutes);