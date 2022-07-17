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
  Ingredients:ingerdientviewmodel[]=[];
  constructor( private ingerdientservices :ingerdientServices ) {}
  

  ngOnInit(): void {
    this.ingerdientservices.getIngerdient().subscribe(res=> 
      {
        console.log(res.data.data);
      
       this.Ingredients=res.data.data
      })
      }
  }
  

  



