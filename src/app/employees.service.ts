import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  url: string = "https://jsonplaceholder.typicode.com/users";

  constructor(private httpclient: HttpClient) { }

  get_users(): Observable<any> {

    return this.httpclient.get(this.url);
  }
}
