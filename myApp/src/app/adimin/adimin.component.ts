import { Component, OnInit } from '@angular/core';
import { faTools} from '@fortawesome/free-solid-svg-icons';
import { ServiceService } from '../service/confi-service/service.service';


@Component({
  selector: 'app-adimin',
  templateUrl: './adimin.component.html',
  styleUrls: ['./adimin.component.css']
})
export class AdiminComponent implements OnInit {
  
  faTools:any
  list: [];
  
  constructor(private http:ServiceService) { }

  ngOnInit(): void {
    this.faTools=faTools
    this.http.getArticle().subscribe(
      item=>{
       this.list=item
       console.log(this.list)
      })
  }

}
