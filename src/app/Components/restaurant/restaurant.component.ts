import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/Restaurant';
import { RestaurantServices } from 'src/app/Services/RestaurantServices';
import { RecipeServices } from 'src/app/Services/RecipeServices';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

 @Input() restaurant:Restaurant = new Restaurant();

  ngOnInit(): void {
    
    }
  }


