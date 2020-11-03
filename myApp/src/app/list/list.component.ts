import { Component, OnInit } from '@angular/core';
import { faList} from '@fortawesome/free-solid-svg-icons';
import { ServiceService } from '../service/confi-service/service.service'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list=[]
  faList:any
  constructor(private http:ServiceService) { }

  ngOnInit(): void {
    this.faList=faList
    this.http.getArticle().subscribe(
       item=>{
        this.list=item
       })
  }
    
   
}
