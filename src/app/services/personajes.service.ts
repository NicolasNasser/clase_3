import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  baseURL: string = "https://rickandmortyapi.com/api"

  constructor(private _http: HttpClient) { }


  getPersonajes() {
    return this._http.get(this.baseURL + "/character")
  }
  getUnPersonajes(idPesonaje: string) {
    return this._http.get(this.baseURL + "/character/" + idPesonaje)
  }
}
