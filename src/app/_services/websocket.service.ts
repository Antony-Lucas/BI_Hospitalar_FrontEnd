import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {
  ATENDIMENTO_API,
  FILTER_API,
  WS_API,
} from '../_environments/environments';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private _dataModel: BehaviorSubject<any> = new BehaviorSubject<any>({});
  private dataStore: { data: any } = { data: {} };
  readonly dataModel = this._dataModel.asObservable();

  private apiUrl = ATENDIMENTO_API;
  private streamUrl = WS_API;
  private filterUrl = FILTER_API;

  constructor(
    private http: HttpClient,
    private storageService: TokenStorageService
  ) {
    this.streamData();
  }

  client: any;
  streamMessage: any;

  filterData(startDate: string, endDate: string) {
    const token = this.storageService.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    let params = new HttpParams();
    params = params.set('startDate', startDate);
    params = params.set('endDate', endDate);

    return this.http.get(this.apiUrl, { headers, params: params });
  }

  getData() {
    const token = this.storageService.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    console.log(token, headers);
    return this.http.get(this.apiUrl, { headers }).subscribe({
      next: (data) => {
        this.dataStore.data = data;
        this._dataModel.next(Object.assign({}, this.dataStore).data);
      },
    });
  }

  streamData() {
    const ws = new SockJS(this.streamUrl);
    this.client = Stomp.over(ws);
    let that = this;
    this.client.connect({}, (frame: any) => {
      that.client.subscribe('/topic1', (message: any) => {
        if (message.body) {
          that.streamMessage = message.body;
          that.dataStore.data = JSON.parse(that.streamMessage);
          that._dataModel.next(Object.assign({}, that.dataStore.data));
        }
      });
    });
  }
}
