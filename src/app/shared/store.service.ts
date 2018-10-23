import { Client } from '../models/client.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  clientListSubject: Subject<Client[]>;
  private fullClientList: Client[];

  constructor(private http: HttpClient) {
    this.clientListSubject = new Subject();
  }

  getFullClientList() {
    const location = window.location.host;
    this.http.get('http://' + location + '/assets/clients.json').subscribe((res: Client[]) => {
      this.fullClientList = res;
      this.clientListSubject.next(res.slice(0, 10));
    }, err => {
      throw err;
    });
  }

  searchClient(value: string) {
    if (!value.length) {
      this.clientListSubject.next(this.fullClientList.slice(0, 10));
      return;
    }
    const searchResult = this.fullClientList.filter(val => {
      const email = val.email || '';
      const name = val.name || '';
      return name.toUpperCase().includes(value.toUpperCase()) || email.toUpperCase().includes(value.toUpperCase());
    });
    this.clientListSubject.next(searchResult);
  }

  loadData(currentList: Client[], event) {
    const arrLength = currentList.length;
    const clientList = currentList.concat(this.fullClientList.slice(arrLength, arrLength + 10));
    this.clientListSubject.next(clientList);
    event.target.complete();
    if (clientList.length === this.fullClientList.length) {
      event.target.disabled = true;
    }
  }

}
