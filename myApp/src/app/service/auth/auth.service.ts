import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { UserResponse } from '../types/userResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private https:HttpClient) { }

  login(data):Observable<any>{
    return this.https.post<UserResponse>(`${environment.app_url}/Userlogin`,data) 
 }

}
