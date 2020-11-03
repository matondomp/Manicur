import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/confi-service/service.service';
/* import { ConfigService } from 'src/app/providers/config/config.service'; */

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

   message = null;
   show = false;
   class = null;

  constructor(private http:ServiceService) { }

  ngOnInit() {
    this.http.alertEvent.subscribe(
      res => {
        this.showAlert(res.message, res.class, res.show);
      }
    );

  }


  public showAlert(message :string, cls:string, show: boolean) {
    this.message = message;
    this.class = cls;
    this.show = show;
    
    setTimeout(() => {
      this.show = false;
    }, 5000);
  }

}
