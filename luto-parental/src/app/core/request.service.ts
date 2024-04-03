import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';




// const API = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})

export class RequestService {

  constructor(private httpClient: HttpClient) { }


  // buscarTags(){
  //   return this.httpClient.get(`${API}/tags/buscarTodas`);
  // }

  // buscarEstados(){
  //   return this.httpClient.get(`${API}/estados/buscarTodos`);
  // }

}
