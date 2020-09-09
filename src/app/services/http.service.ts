import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private client: HttpClient) { }

  getData(filter: string) {
    const delay = Math.random() * 2000;
    return this.client.get<{ delay: number, filter: string }>('/api/filter', {
        params: {filter, delay: delay.toString()}
    });
  }
}
