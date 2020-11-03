
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserResponse } from '../types/userResponse';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  constructor(private http: HttpClient) { }

    register(data):Observable<any>{
      return this.http.post<UserResponse>(`${environment.app_url}/create`,data) 
   }
   
    getArticle():Observable<any>{
      return this.http.post(`${environment.app_url}/index`,null) 
    }
    getVideo():Observable<any>{
      return this.http.post(`${environment.app_url}/payVideo`,null) 
    }
    getAll():Observable<any>{
      return this.http.post(`${environment.app_url}`,null) 
    }
}
