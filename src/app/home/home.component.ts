import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component} from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dataBook:any;
  description:boolean[]=[];
  content:any;
  viewShown:boolean[]=[];
  displayContent:any;
  constructor(private http:HttpClient,private service:DataServiceService){
     service.bookDetails().subscribe((data)=>{
        this.dataBook=data;
        this.content=this.dataBook.description;
        this.viewShown = Array(this.dataBook.length).fill(true);
        this.description = Array(this.dataBook.length).fill(false);
     })

  }

  viewDetails(index:any){
    console.log(index);
    this.description[index]=!this.description[index];
  }

}
