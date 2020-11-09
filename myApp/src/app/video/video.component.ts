import { Component, OnInit } from '@angular/core';
import { faVideo} from '@fortawesome/free-solid-svg-icons';
import { ServiceService } from '../service/confi-service/service.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  list=[]
  faVideo:any
  data={
    id:null,
    file:null,
    description:null
 }

  constructor(private http:ServiceService) { }

  ngOnInit(): void {
    this.faVideo=faVideo
    this.http.getVideo().subscribe(
      item=>{
       this.list=item 
      })
  }

  register(){
    this.data.file=this.files[0]
   console.log(this.files[0]) 
      const formData= new FormData()
      formData.append('file',this.data.file); 
      formData.append('description',this.data.description); 
      console.log(this.data) 
      this.http.registerVideo(formData).subscribe(
         event=>{
           console.log(event)
            if (Object(event).code == 500) {
          this.http.showAlert(Object(event).message, 'alert-danger', true);
        }
        else {
          this.http.showAlert(Object(event).message, 'alert-success', true);
        }}
      )
   }
  files: File[] = [];
  onSelect(event) {
    this.files.push(...event.addedFiles);
  }
   
  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }

}
