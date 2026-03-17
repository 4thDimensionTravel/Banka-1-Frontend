import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface ClientDto {
  id: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  email?: string;
}

@Injectable({ providedIn: 'root' })
export class ClientService {
  private base = `${environment.apiUrl}/clients`;

  constructor(private http: HttpClient) {}

  getAllClients(): Observable<ClientDto[]> {
    return this.http.get<ClientDto[]>(this.base);
  }

  searchClients(query: string, page = 0, size = 50): Observable<{ content: ClientDto[]; total?: number }> {
    let params = new HttpParams().set('page', page.toString()).set('size', size.toString());
    if (query) params = params.set('q', query);
    return this.http.get<{ content: ClientDto[]; total?: number }>(`${this.base}/search`, { params });
  }
}