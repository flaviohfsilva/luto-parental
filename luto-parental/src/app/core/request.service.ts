import { Direitos, ReceberEmail, VerificadorQrCode } from './../interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Estados, Historia, Noticia, Tag } from '../interfaces';




const API = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})

export class RequestService {

  constructor(private httpClient: HttpClient) { }


  buscarTags(): Observable<Tag[]> {
    return this.httpClient.get<Tag[]>(`${API}/tags/buscarTodas`);
  }

  buscarEstados(): Observable<Estados[]> {
    return this.httpClient.get<Estados[]>(`${API}/estados/buscarTodos`);
  }

  enviarHistorias(createHistoriaDto: Historia) {
    return this.httpClient.post<Historia>(`${API}/depoimentos`, createHistoriaDto);
  }

  buscarHistorias(): Observable<Historia[]> {
    return this.httpClient.get<Historia[]>(`${API}/depoimentos/buscarTodos`);
  }

  consultarPaginacaoHistorias(excluido:string, pagina:number, filtro:string){
    return this.httpClient.get(`${API}/depoimentos/buscarPaginas?excluido=${excluido}&&pagina=${pagina}&&filtro=${filtro}`);
  }

  buscarNoticias(): Observable<Noticia[]>{
    return this.httpClient.get<Noticia[]>(`${API}/noticias/buscarTodas`)
  }

  buscarNoticiasPorId(id: string): Observable<Noticia>{
    return this.httpClient.get<Noticia>(`${API}/noticias/buscarPor${id}`)
  }

  consultarPaginacaoNoticias(excluido:string, pagina:number, filtro: string) {
    return this.httpClient.get(`${API}/noticias/buscarPaginas?excluido=${excluido}&&pagina=${pagina}&&filtro=${filtro}`);
  }

  enviarNewsletter(nome: string, email: string) {
    return this.httpClient.get(`${API}/newsletter/enviar/${nome}/${email}`)
  }

  receberEmail(emailContato: ReceberEmail) {
    return this.httpClient.post(`${API}/newsletter/receber`, emailContato)
  }

  emailVerificador(nome: string, email: string) {
    return this.httpClient.get(`${API}/newsletter/enviarVerificadorQrCode/${nome}/${email}`)
  }

  verificadorCodigo(codigo: number, email: string): Observable<VerificadorQrCode> {
    return this.httpClient.get<VerificadorQrCode>(`${API}/newsletter/verificarCodigo/${codigo}/${email}`)
  }

  buscarDireitos(): Observable<Direitos[]>{
    return this.httpClient.get<Direitos[]>(`${API}/direitos/buscarTodos`)
  }

  consultarPaginacaoDireitos(excluido:string, pagina:number, filtro: string) {
    return this.httpClient.get(`${API}/direitos/buscarPaginas?excluido=${excluido}&&pagina=${pagina}&&filtro=${filtro}`);
  }

}
