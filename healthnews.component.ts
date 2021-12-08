import { NewsapiservicesService } from './../service/newsapiservices.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-healthnews',
  templateUrl: './healthnews.component.html',
  styleUrls: ['./healthnews.component.css']
})
export class HealthnewsComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }
  
  healthnewsDisplay:any=[];

  ngOnInit(): void {
    this._services.healthNews().subscribe((result)=>{
      this.healthnewsDisplay=result.articles;
    });
  }

}
