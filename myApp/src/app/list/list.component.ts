import { Component, OnInit } from '@angular/core';
import { faList} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  faList:any
  constructor() { }

  ngOnInit(): void {
    this.faList=faList
  }

}
