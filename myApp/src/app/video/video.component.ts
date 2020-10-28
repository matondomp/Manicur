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
  constructor(private http:ServiceService) { }

  ngOnInit(): void {
    this.faVideo=faVideo
    this.http.getArticle().subscribe(
      item=>{
       this.list=item 
      })
  }

}
