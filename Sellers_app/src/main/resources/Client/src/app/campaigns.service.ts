import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Campaign } from './campaign.model';
@Injectable({
  providedIn: 'root'
})
export class CampaignsService {
  baseUrl: string = "//localhost:8080/campaigns"
  constructor(private http: HttpClient) { }
  getAll(): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(this.baseUrl);
  }
  get(id: number): Observable<Campaign> {
    return this.http.get<Campaign>(`${this.baseUrl}/${id}`);
  }
  create(data: Campaign): Observable<Campaign> {
    return this.http.post<Campaign>(this.baseUrl, data);
  }
  update(id: number, data: Campaign): Observable<Campaign> {
    return this.http.put<Campaign>(`${this.baseUrl}/${id}`, data);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}