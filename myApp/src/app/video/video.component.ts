import { Component, OnInit } from '@angular/core';
import { faVideo} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  
  faVideo:any
  constructor() { }

  ngOnInit(): void {
    this.faVideo=faVideo
  }

}
