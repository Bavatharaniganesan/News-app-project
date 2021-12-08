import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  //newsApiurl
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=51c729d19a724691be719079d6a649a7";
  //technewsapiurl
  techApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=51c729d19a724691be719079d6a649a7";
  //businessnewsapiurl
  businessApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=51c729d19a724691be719079d6a649a7";
  //sportsnews
  sportsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=51c729d19a724691be719079d6a649a7";
  //healthnews
  healthApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=51c729d19a724691be719079d6a649a7";
  //topheading()
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }
  //technews()
  techNews():Observable<any>
  {
    return this._http.get(this.techApiUrl);
  }
  //businessnews()
  businessNews():Observable<any>
  {
    return this._http.get(this.businessApiUrl);
  }
  sportsNews():Observable<any>
  {
    return this._http.get(this.sportsApiUrl);
  }
  healthNews():Observable<any>
  {
    return this._http.get(this.healthApiUrl);
  }
}
