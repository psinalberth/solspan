import {Component, EventEmitter, Output, OnInit, Input} from '@angular/core';
import {UsuarioService} from './usuario.service';
import {Usuario} from './usuario';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
	selector: 'usuario-form',
	moduleId: module.id,
	templateUrl: 'usuario-detail.component.html',
	styles: [

	`
	:host {
	  display: block;
	}

	.main-layout {
	  display: flex;
	  justify-content: space-between;
	}

	form {
	  display: flex;
	  flex: 1;
	  overflow: auto;
	}

	@media (max-width: 900px) {
	  form {
	    flex-direction: column;
	  }
	}

	.form {
	  flex: 2;
	  padding-right: 24px;
	}

	.receipt {
	  flex: 3;
	  background: #F7F8F8;
	}

	img {
	  max-width: 100%;
	  max-height: 500px;
	  margin-bottom: 20px;
	}

	vaadin-upload {
	  display: flex;
	  flex-direction: column-reverse;
	}

	.file-list {
	  text-align: center;
	}
	`
	]
})

export class UsuarioDetailComponent implements OnInit {

	@Output() closeEvent = new EventEmitter<any>();
	
	usuario: Usuario = new Usuario();
	titulo: string;

	constructor(private usuarioService: UsuarioService, private router: Router, 
				private route: ActivatedRoute) {}

	ngOnInit() {

	  this.titulo = 'Novo';
	}

	private close() {
		this.closeEvent.emit(false);
	}

	save() {

		var result;

		if (this.usuario.id == 0) {
			result = this.usuarioService.save(this.usuario);
		} else {
			result = this.usuarioService.update(this.usuario);
		}

		 result.subscribe(data => this.router.navigate(['/']));
	}

}