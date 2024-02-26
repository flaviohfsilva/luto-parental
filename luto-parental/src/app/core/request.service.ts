import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

// const API = 
@Injectable({
  providedIn: 'root'
})

export class RequestService {

  constructor(private httpClient: HttpClient) { }
}
