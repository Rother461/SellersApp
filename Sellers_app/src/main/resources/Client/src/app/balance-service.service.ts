import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BalanceServiceService {
  balance = 100000;
  baseUrl: string = "//localhost:8080/balance"
  constructor(private http: HttpClient) { }

  get(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}`);
  }
  updateBalance(bal: number): void {
    this.balance -= bal;
  }


}
