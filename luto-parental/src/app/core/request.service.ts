import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Estados, Historia, Tag } from '../interfaces';




const API = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})

export class RequestService {

  constructor(private httpClient: HttpClient) { }


  buscarTags(): Observable<Tag[]>{
    return this.httpClient.get<Tag[]>(`${API}/tags/buscarTodas`);
  }

  buscarEstados(): Observable<Estados[]>{
    return this.httpClient.get<Estados[]>(`${API}/estados/buscarTodos`);
  }

  enviarHistorias(createHistoriaDto: Historia) {
    return this.httpClient.post<Historia>(`${API}/depoimentos`, createHistoriaDto);
  }

  buscarHistorias(): Observable<Historia[]>{
    return this.httpClient.get<Historia[]>(`${API}/depoimentos/buscarTodos`);
  }
}
