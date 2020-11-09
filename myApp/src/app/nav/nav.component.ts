import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { faTools} from '@fortawesome/free-solid-svg-icons';
import { faVideo} from '@fortawesome/free-solid-svg-icons';
import { faHome} from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {AuthGuardService} from '../service/guard/auth-guard.service'
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  faTools:any
  faVideo:any
  faHome:any
  faList:any
  faUser:any
  valida:any
  constructor(private guard:AuthGuardService) { }
  

  ngOnInit(): void {
    this.faTools=faTools
    this.faVideo=faVideo
    this.faHome=faHome
    this.faList=faList
    this.faUser=faUser
  }

}
