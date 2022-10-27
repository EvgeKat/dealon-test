import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vin',
  templateUrl: './vin.component.html',
  styleUrls: ['./vin.component.scss']
})

export class VinComponent implements OnInit {
  userVins: [];
  response: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
   this.userVins = [];

   this.http.get<any>('https://dev.dealon.pro/frontendTest/Car/vin').subscribe(data => {
    this.userVins = data.total;
   })
  
  }






  /*search() {
    this.http.get('https://dev.dealon.pro/frontendTest/Car/vin' + this.userVins)
    .subscribe((Response)=>{
      this.response = Response;
      console.log(this.response)
    })
  }*/


 /* getAccounts(){
    return this.http.get('https://dev.dealon.pro/frontendTest/Car/vin');
    }*/



}
