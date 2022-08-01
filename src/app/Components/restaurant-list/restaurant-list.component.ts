import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/Restaurant';
import { PagingViewModel } from 'src/app/models/ResultViewModel';
import { RestaurantServices } from 'src/app/Services/RestaurantServices';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  page: number = 1; //current page number
  count: number = 1; //total pages

  //number of elements to get form database per request
  tableSize: number = 10;
  tableSizes: any = [1, 5, 10, 20];
  restaurant:Restaurant[]=[];
  restName:string="";
  constructor(private RestaurantServices:RestaurantServices) { }

  ngOnInit(): void {
    this.fetchData()
    this.RestaurantServices.getRestaurant(this.tableSize,this.page).subscribe(res =>
      {
        console.log(res);
        this.restaurant=res.data;
        this.getRestByName();
      })

}

getName(val:string){
  this.restName=val;
}


getRestByName(){
  //console.log(this.restName)
  if(this.restName!=="")
      {
      this.RestaurantServices.getRestByName(this.restName) .subscribe(res=>
        {
          console.log(res);
          this.restaurant=res.data
        })
      }
      else {
        this.RestaurantServices.getRestaurant(this.tableSize,this.page).subscribe(res => {
          let responce = res.data as PagingViewModel
          this.page = responce.pageIndex;
          this.tableSize = responce.pageSize;
          this.count = responce.count;
          this.restaurant= responce.data as Restaurant[];})

      }
     
}

fetchData() {
  this.RestaurantServices.getRestaurant(this.tableSize,this.page).subscribe(res => {
    console.log(res.data);
    this.page = res.data.pageIndex;
    this.tableSize = res.data.pageSize;
    this.count = res.data.count;
    this.restaurant = res.data.data
  })
}
onTableDataChange(event: any) {
  console.log(event);
  this.page = event;
  this.fetchData()
}
}