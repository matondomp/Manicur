import { Token } from './../service/types/token';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth/auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    data={
    id:null,
    senha:null,
    email:null
   }

  constructor(private auth:AuthService,private route:Router) { }

  ngOnInit(): void {
  }
   
   login(){
    return this.auth.login(this.data).subscribe(
      data => {
          localStorage.setItem('User', JSON.stringify(data));
       if(data.token)this.route.navigate(['/home'])
      }        
  ) 
  
   
}
}
