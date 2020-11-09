import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/confi-service/service.service';
import {AuthGuardService} from '../service/guard/auth-guard.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list=[]
  data={
    active:null,
    id:null
  }
  id=1
  valida:boolean
  constructor(private http:ServiceService,private guard:AuthGuardService) { }

  ngOnInit(): void {
    this.http.getArticles().subscribe(
      item=>{
       this.list=item
      }),

      this.valida=this.guard.values
    
    console.log(this.guard.values)
  }
 actives(){
   
    var index
    this.list.map(res=>index=res.id)
     if(this.id<index){ 
        this.id+=1
        console.log(index)
     }
 }
 reset(){
    if(this.id>1)this.id-=1
 }
 getId(id){
   this.data.id=id
   console.log(this.data.id)
 }
}
