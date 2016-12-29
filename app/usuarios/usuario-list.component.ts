import {Component, OnInit, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import {Usuario} from './usuario';
import {UsuarioService} from './usuario.service';

@Component({
	selector: 'usuario-list',
	moduleId: module.id,
	templateUrl: 'usuario-list.component.html'
})

export class UsuarioListComponent implements OnInit {

	@Output() editarUsuario: EventEmitter<any> = new EventEmitter();
	@Output() novoUsuario: EventEmitter<any> = new EventEmitter();
	@ViewChild('grid') grid: any;

	usuario: Usuario = new Usuario();
	usuarios: Usuario[];
	errorMessage: string = '';
	isLoading: boolean = true;

	constructor(private usuarioService: UsuarioService) {}

	ngOnInit() {
		this.getUsuarios();
	}

	getUsuarios() {
		this.usuarioService.getUsuarios().subscribe(
                       usuarios => this.usuarios = usuarios,
                       errorMessage => this.errorMessage = errorMessage);
	}

	private novo() {
		this.usuario = new Usuario();
		this.novoUsuario.emit(this.usuario);
	}

	private editar(grid: any) {

		var selection = grid.selection.selected();

		if (selection.length === 1) {
		      grid.selection.clear();
		      grid.getItem(selection[0], (err: any, item: any) => {
		        this.editarUsuario.emit(item);
		      });
		    }
	}
}