import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

 /* getUsers() {
    return Observable.create(observable =>
      this.http.get(environment.URL_CLIENT).subscribe(
        (response: any) => {
          observable.next(response);
        },
        (error: any) => {
          observable.error(error.message);
        }
      )
    );
  }*/

  login(userName:string, password:string){

    let body = {
      userName:userName,
      password:password
    }

    return Observable.create(observable =>
      this.http.post(environment.URL_CLIENT,body).subscribe(
        (response: any) => {
          observable.next(response);
        },
        (error: any) => {
          observable.error(error.message);
        }
      )
    );
  }

  
}
