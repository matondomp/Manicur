import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/confi-service/service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  data={
    id:null,
    senha:null,
    verify_pass:null,
    email:null,
   	nome:null,
    lastname:null 
 }
  constructor(private https:ServiceService,private route:Router) { }

  ngOnInit(): void {
  }

  register(){
    if(this.data.verify_pass===this.data.senha){
      return this.https.register(this.data).subscribe(
        data=>{
          if(data.id){
            this.route.navigate(['/home'])
            this.data.id=data.id
          }
        
        }
      )
    }
    
  }
}
