import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {PerfilService} from './shared/perfil.service';
import { FormsModule } from '@angular/forms';

import {PerfilListComponent} from './perfil-list.component';
import {PerfilDetailComponent} from './perfil-detail.component';
import {PerfilOverviewComponent} from './perfil-overview.component';

import { PolymerElement } from '@vaadin/angular2-polymer';

@NgModule({

	imports: [RouterModule, HttpModule, FormsModule],
	declarations: [
		PerfilListComponent, 
		PerfilDetailComponent, 
		PerfilOverviewComponent, 
		PolymerElement('vaadin-grid'),
		//PolymerElement('iron-flex-layout'),
		PolymerElement('paper-fab'),
		PolymerElement('paper-dialog'),
		PolymerElement('paper-icon-button'),
		PolymerElement('paper-input'),
		PolymerElement('paper-button')
		],
	exports: [PerfilOverviewComponent],
	providers: [PerfilService]
})

export class PerfilModule {}