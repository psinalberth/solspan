import {Component, Output, EventEmitter} from '@angular/core';
import {PerfilService} from './shared/perfil.service';
import {Perfil} from './shared/perfil';
import {Router, ActivatedRoute} from '@angular/router';

@Component({

	moduleId: module.id,
	selector: 'perfil-form',
	templateUrl: 'perfil-detail.component.html',
	styleUrls: ['perfil-detail.component.css']
})

export class PerfilDetailComponent {

	@Output() closeEvent = new EventEmitter<any>();

	perfil: Perfil = new Perfil();

	constructor(private perfilService: PerfilService, 
				private router: Router, 
				private route: ActivatedRoute) {}

	private close() {
		this.closeEvent.emit(false);
	}

	save() {

		var result;

		if (this.perfil.id == 0) {
			result = this.perfilService.save(this.perfil);
		}

		result.subscribe(data => this.router.navigate(['/']));
	}
}