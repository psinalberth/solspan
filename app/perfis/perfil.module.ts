import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {PerfilService} from './shared/perfil.service';

import {PerfilListComponent} from './perfil-list.component';
import {PerfilDetailComponent} from './perfil-detail.component';

@NgModule({

	imports: [RouterModule, HttpModule],
	declarations: [PerfilListComponent, PerfilDetailComponent],
	exports: [PerfilListComponent],
	providers: [PerfilService]
})

export class PerfilModule {}