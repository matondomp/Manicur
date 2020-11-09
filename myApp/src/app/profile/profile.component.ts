import { Component, OnInit } from '@angular/core';
import { faEdit} from '@fortawesome/free-solid-svg-icons';
import { ServiceService } from '../service/confi-service/service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  faEdit:any
  data={
    id:null,
    senha:null,
    email:null,
    username:null
 }
 list=[]
  constructor(private https:ServiceService) { }

  ngOnInit(): void {
    this.faEdit=faEdit
    this.getUser()
  }
   
  getUser(){
     this.https.getUser(this.data).subscribe(
      item=>{
        this.list=item
        console.log(this.list)
       }
     )
  }

  files: File[] = [];
 
onSelect(event) {
  console.log(event);
  this.files.push(...event.addedFiles);
}
 
onRemove(event) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}
}
