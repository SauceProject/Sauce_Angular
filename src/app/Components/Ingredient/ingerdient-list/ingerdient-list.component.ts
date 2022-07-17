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
  Form:FormGroup=new FormGroup([]);
  constructor( private formBuilder:FormBuilder ,private ingerdientservices :ingerdientServices,private Http:HttpClient ) {}
  

  ngOnInit(): void {
  this.build()
  }
  build(ingerdient?:ingerdientviewmodel){

    this.Form=this.formBuilder.group(
      {
        nameEn:[''],
        nameAr:[''],
        uploadedimg:['']
    });


  }

  add(){
    let ingerdient:ingerdientviewmodel=new ingerdientviewmodel();

    ingerdient.NameEn=this.Form.value["nameEn"];
    ingerdient.NameAr=this.Form.value["nameAr"];
    ingerdient.uploadedimg=this.Form.value["uploadedimg"];
    console.log(ingerdient);
    this.ingerdientservices.addIngerdient(ingerdient).subscribe();
}
}


