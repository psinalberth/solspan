import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Perfil} from './perfil';

import 'app/rxjs-operators';

@Injectable()
export class PerfilService {

	constructor(private http: Http) {
		this.http = http;
	}

	save(perfil: Perfil) {
    return this.http.post('http://localhost:8989/api/perfis/', JSON.stringify(perfil))
      .map(mapPerfil);
  }

  update(perfil: Perfil) {
    return this.http.put('http://localhost:8989/api/perfis/' + perfil.id, JSON.stringify(perfil))
      .map(mapPerfil);
  }

	getPerfis() {

    let perfis = this.http
       .get('http://localhost:8989/api/perfis/', {headers: this.getHeaders()})
       .map(mapPerfis);

    return perfis;
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

function mapPerfis(response: Response): Perfil[] {
  return response.json().map(toPerfil);
}

function toPerfil(r:any): Perfil {

  let perfil = <Perfil>({
     id: r.id,
     nome: r.nome,
     descricao: r.descricao
  });

  return perfil;
}

function mapPerfil(response: Response): Perfil {
  return toPerfil(response.json());
}