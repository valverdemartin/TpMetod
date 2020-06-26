import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Client } from '../models/client';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getClients(){
    return Observable.create(observable => {
      this.http.get(environment.URL_CLIENT).subscribe(
        (response: any) => {
          observable.next(response);
        },
        (error: any) => {
          observable.error(error.message);
        }
      )
    });
  }

  createClient(client: Client){
    return Observable.create(observable => {
      this.http.post(environment.URL_CLIENT, client).subscribe(
        (response: any) => {
          observable.next(response);
        },
        (error: any) => {
          observable.error(error.message);
        }
      )
    });
  }

  updateClient(client: Client){
    return Observable.create(observable => {
      this.http.put(environment.URL_CLIENT + client.idClient + '/', client).subscribe(
        (response: any) => {
          observable.next(response);
        },
        (error: any) => {
          observable.error(error.message);
        }
      )
    });
  }

  deleteClient(client_id: number){
    return Observable.create(observable => {
      this.http.delete(environment.URL_CLIENT + client_id).subscribe(
        (response: any) => {
          observable.next(response);
        },
        (error: any) => {
          observable.error(error.message);
        }
      )
    });
  }
}
