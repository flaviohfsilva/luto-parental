import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Estados, Historia, Noticia, Tag } from '../interfaces';




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

  consultarPaginacaoHistorias(excluido:string, pagina:number){
    return this.httpClient.get(`${API}/depoimentos/buscarPaginas?excluido=${excluido}&&pagina=${pagina}`);
  }

  buscarNoticias(): Observable<Noticia[]>{
    return this.httpClient.get<Noticia[]>(`${API}/noticias/buscarTodas`)
  }

  consultarPaginacaoNoticias(excluido:string, pagina:number){
    return this.httpClient.get(`${API}/noticias/buscarPaginas?excluido=${excluido}&&pagina=${pagina}`);
  }

}
