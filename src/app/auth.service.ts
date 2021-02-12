import { HttpClient } from '@angular/common/http';
import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private stocks ="https://rapidapi.com/apidojo/api/yahoo-finance1?endpoint=5c1b0669e4b09c6b17cfb448";
  constructor(private http:HttpClient) {     
  }
  getTrendingStocks(){
    return  this.http.get<any>(this.stocks);
   }
  loggedIn(){
       return !! localStorage.getItem("loginToken")
  }
}
