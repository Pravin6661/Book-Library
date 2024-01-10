import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {

  constructor(private _http:HttpClient,private route:Router) { }

  bookDetails(){
      return this._http.get<any>("http://localhost:3000/details");
  }

  addBookDetails(formvalue:any){
    this._http.post<any>("http://localhost:3000/details",formvalue).subscribe(()=>{
      alert("Book Added");
        this.route.navigateByUrl('addbook').then(()=>{
          window.location.reload();
        });
    })
  }

  updateBookDetails(url:any,value:any){
      this._http.patch<any>(url,value).subscribe((patched)=>{
            alert("value updated");
            this.route.navigateByUrl('managebook').then(()=>{
              window.location.reload();
            })
          })
  }
}
