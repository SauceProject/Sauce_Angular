import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/Restaurant';
import { RestaurantServices } from 'src/app/Services/RestaurantServices';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  restaurant:Restaurant[]=[];
  constructor(private RestaurantServices:RestaurantServices) { }

  ngOnInit(): void {
    this.RestaurantServices.getRestaurant().subscribe(res=>
      {
        console.log(res);
        this.restaurant=res.data.data
      })

}
}