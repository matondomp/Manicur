import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { VideoComponent } from './video/video.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdiminComponent } from './adimin/adimin.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfileComponent } from './profile/profile.component';
import { PdfComponent } from './pdf/pdf.component'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AlertComponent } from './alert/alert.component';
@NgModule({
  
 declarations: [
    HomeComponent,
    AppComponent,
    NavComponent,
    ListComponent,
    VideoComponent,
    LoginComponent,
    RegisterComponent,
    AdiminComponent,
    ProfileComponent,
    PdfComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
   AppRoutingModule,
   FontAwesomeModule,
   FormsModule,
   HttpClientModule,
   NgxDropzoneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
