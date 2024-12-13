import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatalogosService {
  private _apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // listarCatalogos
  listarCatalogos(body: object): Observable<any> {
    return this.http.post(`${this._apiUrl}/listarCatalogos`, body)
  }

  // listarDescripcionCatalogos
  listarDescripcionCatalogos(body: object): Observable<any> {
    return this.http.post(`${this._apiUrl}/listarDescripcionCatalogos`, body)
  }


  // Insertar registro
  saveRegistro(body: object): Observable<any> {
    return this.http.post(`${this._apiUrl}/saveRegistro`, body)
  }
  
}
