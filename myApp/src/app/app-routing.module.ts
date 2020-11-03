import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import{ HomeComponent } from './home/home.component'
import{ VideoComponent } from './video/video.component'
import{ ListComponent } from './list/list.component'
import{ RegisterComponent } from './register/register.component'
import { LoginComponent } from './login/login.component';
import { AdiminComponent } from './adimin/adimin.component';
import { ProfileComponent } from './profile/profile.component';
import { PdfComponent } from './pdf/pdf.component';

const routes: Routes = [
 
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"profile",
    component:ProfileComponent
  },
  {
    path:"pdf",
    component:PdfComponent
  },
 
  {
    path:"adimin",
    component:AdiminComponent
  },
  {
    path:"registar",
    component:RegisterComponent
  },
  {
    path:"list",
    component:ListComponent
  },
/* 
  {
    path:"app",
    component:AppComponent
  }, */

  {
    path:"home",
    component:HomeComponent
  },

  {
    path:"video",
    component:VideoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
