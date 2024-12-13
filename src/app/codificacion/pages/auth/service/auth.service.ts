import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {



  private _apiUrl: string = environment.apiUrl;


  constructor(private http: HttpClient) {}

  // Autenticación
  autenticacion(body: object): Observable<any> {  
    return this.http.post(`${this._apiUrl}/autenticacion`, body)
  }

}
