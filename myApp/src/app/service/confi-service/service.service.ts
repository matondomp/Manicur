
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserResponse } from '../types/userResponse';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  constructor(private http: HttpClient) { }
  public alertEvent = new EventEmitter<Object>();
  public loaddingEvent = new EventEmitter<Object>();
  
  public showAlert(message: string, cls: string, show: boolean) {
    this.alertEvent.emit({ message: message, class: cls, show: show });
  }

  public loaddinStarter(type: string) {
    this.loaddingEvent.emit({ type: type });
  }
    register(data):Observable<any>{
      return this.http.post<UserResponse>(`${environment.app_url}/create`,data) 
   }
   
    registerAticle(data):Observable<any>{
      return this.http.post<UserResponse>(`${environment.app_url}/files`,data) 
   }
    updateAticle(data,id):Observable<any>{
      return this.http.post<UserResponse>(`${environment.app_url}/files/${id}`,data) 
   }
    getUser(data):Observable<any>{
      return this.http.post<UserResponse>(`${environment.app_url}/listUser`,data) 
   }
   
   registerVideo(data):Observable<any>{
    return this.http.post<UserResponse>(`${environment.app_url}/video`,data) 
   }
    getArticles():Observable<any>{
      return this.http.post(`${environment.app_url}/index`,null) 
    }
    getArticle(id):Observable<any>{
      return this.http.post(`${environment.app_url}/index/${id}`,null) 
    }
    getVideo():Observable<any>{
      return this.http.post(`${environment.app_url}/payVideo`,null) 
    }
    getAll():Observable<any>{
      return this.http.post(`${environment.app_url}`,null) 
    }
}
