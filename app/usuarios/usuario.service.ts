import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {Usuario} from './usuario';

import '../rxjs-operators';

@Injectable()
export class UsuarioService {

	constructor(private http: Http) {
    this.http = http;
  }

  save(usuario: Usuario) {
    return this.http.post('http://localhost:8989/api/usuarios/', JSON.stringify(usuario))
      .map(mapUsuario)
      .catch(handleError);
  }

  update(usuario: Usuario) {
    return this.http.put('http://localhost:8989/api/usuarios/' + usuario.id, JSON.stringify(usuario))
      .map(mapUsuario)
      .catch(handleError);
  }

	getUsuarios() {

    let usuarios = this.http
       .get('http://localhost:8989/api/usuarios/', {headers: this.getHeaders()})
       .map(mapUsuarios)
       .catch(handleError);

    return usuarios;
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}

function handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

function mapUsuarios(response: Response): Usuario[] {
  return response.json().map(toUsuario);
}

function toUsuario(r:any): Usuario {

  let usuario = <Usuario>({
     id: r.id,
     nome: r.nome,
     login: r.login,
     senha: r.senha
  });

  return usuario;
}

function mapUsuario(response: Response): Usuario {
  return toUsuario(response.json());
}