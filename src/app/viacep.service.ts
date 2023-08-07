import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {
  private baseURL = 'https?:viacep.com.br/ws';

  constructor(private http: HttpClient) { }

  getCepInfo(cep: string) {
    const url = `${this.baseURL}/${cep}/json`;
    return this.http.get(url);
  }
}
