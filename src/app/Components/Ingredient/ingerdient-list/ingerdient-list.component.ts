import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ingerdientviewmodel } from 'src/app/models/IngerdientViewModel';
import { ingerdientServices } from 'src/app/Services/ingerdientservices';

@Component({
  selector: 'app-ingerdient-list',
  templateUrl: './ingerdient-list.component.html',
  styleUrls: ['./ingerdient-list.component.css']
})
export class IngerdientListComponent implements OnInit {
  page: number = 1; //current page number
  count: number = 1; //total pages

  //number of elements to get form database per request
  tableSize: number = 3;
  tableSizes: any = [1, 5, 10, 20];
  Ingredients: ingerdientviewmodel[] = [];
  IngName: string = "";
  constructor(private ingerdientservices: ingerdientServices) { }


  ngOnInit(): void {
    this.fetchData()
  }
  getName(val: string) {
    this.IngName = val;
  }
  getIngByName() {
    //console.log(this.restName)
    if (this.IngName !== "") {
      this.ingerdientservices.getIngByName(this.IngName).subscribe(res => {
        console.log(res);
        this.Ingredients = res.data
      })
    }

  }
  fetchData() {
    this.ingerdientservices.getIngerdient(this.tableSize,this.page).subscribe(res => {
      console.log(res.data);
      this.page = res.data.pageIndex;
      this.tableSize = res.data.pageSize;
      this.count = res.data.count;
      this.Ingredients = res.data.data
    })
  }
  onTableDataChange(event: any) {
    console.log(event);
    this.page = event;
    this.fetchData()
  }
}






