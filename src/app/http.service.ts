import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

interface data{
  result:[]
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  public url="http://localhost:2020"

  constructor(
    private http:HttpClient
  ) { }

  public getALlItem():Observable<data>{
   return this.http.get<data>(`${this.url}/item`)
  }

  public addItem(data){
    return this.http.post(`${this.url}/item`,data)
  }
}
