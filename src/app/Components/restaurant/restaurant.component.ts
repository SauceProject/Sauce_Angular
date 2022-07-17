import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ResConfig } from 'src/app/models/Restaurant/ResConfig';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  restaurant:RestaurantComponent[]=[];
  constructor(private Http:HttpClient) { }

  ngOnInit(): void {
    this.Http.get<ResConfig>("https://localhost:5001/RestaurantAPI/Get").subscribe(Response=>{
      console.log(Response.data)
    })
  }

}
