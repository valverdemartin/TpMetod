import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Extinguisher } from '../models/extinguisher';
@Injectable({
  providedIn: 'root'
})
export class ExtinguisherService {

  constructor(private http: HttpClient) { }

  getExtinguisher(bar_code){
    return Observable.create(observable => {
      this.http.get(environment.URL_EXTINGUISHER + bar_code).subscribe(
        (response: any) => {
          observable.next(response);
        },
        (error: any) => {
          observable.error(error);
        }
      )
    });
  }
  editExtinguisher(estinguisher: Extinguisher){
    return Observable.create(observable => {
      this.http.put(environment.URL_EXTINGUISHER + estinguisher.idFireExtinguisher, estinguisher).subscribe(
        (response: any) => {
          observable.next(response);
        },
        (error: any) => {
          observable.error(error);
        }
      )
    });
  }
  deleteExtinguisher(estinguisher_id: number){
    return Observable.create(observable => {
      this.http.delete(environment.URL_EXTINGUISHER + estinguisher_id).subscribe(
        (response: any) => {
          observable.next(response);
        },
        (error: any) => {
          observable.error(error);
        }
      )
    });
  }
}
