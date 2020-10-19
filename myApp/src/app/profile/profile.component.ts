import { Component, OnInit } from '@angular/core';
import { faEdit} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  faEdit:any
  constructor() { }

  ngOnInit(): void {
    this.faEdit=faEdit
  }

}
