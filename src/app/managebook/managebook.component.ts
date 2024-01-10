import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-managebook',
  templateUrl: './managebook.component.html',
  styleUrls: ['./managebook.component.css']
})
export class ManagebookComponent {
  dataBook:any=[];
  content:any=[];
  storeData:any;
  showForm:boolean=false;
  Addnewbook:any;
  storeID:any;
  constructor(private http:HttpClient,private route:Router,private form:FormBuilder,private service:DataServiceService){
      service.bookDetails().subscribe((book)=>{
        this.dataBook=book;
        this.content=this.dataBook.description;
      })

  }





  closeForm(){
    this.showForm=false;
  }

  updateBook(id:any){
    this.showForm=true;
    this.service.bookDetails().subscribe((data)=>{
      console.log(data);
      const find=data.find((value:any)=>{
              this.storeData=value;
              return value.id==id;
          });
          if(find){
                this.Addnewbook=this.form.group(
                  {
                    id:[this.storeData.id,[Validators.required]],
                    coursename:[this.storeData.coursename,[Validators.required]],
                    description:[this.storeData.description,[Validators.required]]
                  }
                )
              }
    });

  }

  bookUpdation(){
    this.service.bookDetails().subscribe((data)=>{
        const find=data.find((value:any)=>{
              this.storeID=value.id;
            return value.id==this.Addnewbook.controls['id'].value;
        })
        if(find){
          let formvalue={
            coursename:this.Addnewbook.controls['coursename'].value,
            description:this.Addnewbook.controls['description'].value
          }
          this.service.updateBookDetails("http://localhost:3000/details"+"/"+this.storeID,formvalue);

        }
    })
  }

  deleteBook(id:any){
    this.http.get<any>("http://localhost:3000/details").subscribe((data)=>{
      const find=data.find((value:any)=>{
          this.storeData=value;
          return value.id==id;
      });
      if(find){
        this.http.delete<any>("http://localhost:3000/details"+"/"+id).subscribe(()=>{
          alert("Book Deleted");
          this.route.navigateByUrl('managebook').then(()=>{
            window.location.reload();
        })
        })
      }
    })
  }
}
