import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  form:FormGroup=new FormGroup([]);
  constructor(private builder:FormBuilder) { }

  ngOnInit(): void {
    this.form=this.builder.group(
      {
      Email:['',[Validators.required,Validators.email]],
      Password:['',[Validators.required]]
    },
    )

  }
  add(){
    console.log(this.form.value)
  }

}
