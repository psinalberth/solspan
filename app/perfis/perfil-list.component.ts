import {Component, Output, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {Perfil} from './shared/perfil';
import {PerfilService} from './shared/perfil.service';

@Component({
	
	selector: 'perfil-list',
	moduleId: module.id,
	templateUrl: 'perfil-list.component.html'
})

export class PerfilListComponent implements OnInit {

	@Output() editarPerfil: EventEmitter<any> = new EventEmitter();
	@Output() novoPerfil: EventEmitter<any> = new EventEmitter();
	@ViewChild('grid') grid: any;

	perfil: Perfil = new Perfil();
	perfis: Perfil[];

	constructor(private perfilService: PerfilService) {}

	ngOnInit() {
		this.getPerfis();
	}

	getPerfis() {
		this.perfilService.getPerfis().subscribe(perfis => this.perfis = perfis);
	}

	private novo() {
		this.perfil = new Perfil();
		this.novoPerfil.emit(this.perfil);
	}

	private editar(grid: any) {

		var selection = grid.selection.selected();

		if (selection.length === 1) {
		      grid.selection.clear();
		      grid.getItem(selection[0], (err: any, item: any) => {
		        this.editarPerfil.emit(item);
		      });
		    }
	}

}