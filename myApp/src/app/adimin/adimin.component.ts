import { Component, OnInit } from '@angular/core';
import { faTools} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-adimin',
  templateUrl: './adimin.component.html',
  styleUrls: ['./adimin.component.css']
})
export class AdiminComponent implements OnInit {
  
  faTools:any
  constructor() { }

  ngOnInit(): void {
    this.faTools=faTools
  }

}
