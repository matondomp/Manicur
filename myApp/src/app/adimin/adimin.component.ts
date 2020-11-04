import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { faTools} from '@fortawesome/free-solid-svg-icons';
import { ServiceService } from '../service/confi-service/service.service';

@Component({
  selector: 'app-adimin',
  templateUrl: './adimin.component.html',
  styleUrls: ['./adimin.component.css']
})
export class AdiminComponent implements OnInit {
  data={
    id:null,
    file:null,
    nome:null,
    description:null,
    fulldescription:null,
    price:null,
    old_file:null 
 }
  faTools:any
  list: [];
  listOne:any;
  files: File[] = [];
  
  constructor(private http:ServiceService) { }

  ngOnInit(): void {
    this.faTools=faTools
    this.http.getArticles().subscribe(
      item=>{
       this.list=item
      })
  }

    register(){
      this.data.file=this.files[0]
     console.log(this.files[0]) 
        const formData= new FormData()
        formData.append('file',this.data.file); 
        formData.append('nome',this.data.nome); 
        formData.append('description',this.data.description); 
        formData.append('fulldescription',this.data.fulldescription); 
        formData.append('price',this.data.price); 
        console.log(this.data) 
        this.http.registerAticle(formData).subscribe(
           event=>{
             console.log(event)
              if (Object(event).code == 500) {
            this.http.showAlert(Object(event).message, 'alert-danger', true);
          }
          else {
            this.http.showAlert(Object(event).message, 'alert-success', true);
          }}
        )
     }

     update(){
      console.log(this.data)
      this.data.file=this.files[0]
      console.log(this.files[0]) 
         const formData= new FormData()
         formData.append('file',this.data.file); 
         formData.append('old_file',this.data.old_file); 
         formData.append('nome',this.data.nome); 
         formData.append('description',this.data.description); 
         formData.append('fulldescription',this.data.fulldescription); 
         formData.append('price',this.data.price);   
        this.http.updateAticle(formData,this.data.id).subscribe(
          event=>{
            console.log(event)
             if (Object(event).code == 500) {
           this.http.showAlert(Object(event).message, 'alert-danger', true);
         }
         else {
           this.http.showAlert(Object(event).message, 'alert-success', true);
         }}
       )
     }

    onSelect(event) {
      this.files.push(...event.addedFiles);
    }
     
    onRemove(event) {
      this.files.splice(this.files.indexOf(event), 1);
    }

    getArticle(id){
    this.http.loaddinStarter('start');
      this.http.getArticle(id).subscribe(
        item=>{
         this.listOne=item
        })
    }

    getAllData(id,file,nome,description,fulldescription,price,avatar){
         this.data.id=id,
       this.data.file=file,
       this.data.nome=nome,
       this.data.description=description,
       this.data.fulldescription=fulldescription,
       this.data.price=price 
        var total = avatar.length;
        this.data.old_file= avatar.slice(22,total); 
    }
}

                       