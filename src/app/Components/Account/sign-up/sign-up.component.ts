import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  form:FormGroup=new FormGroup([]);

  constructor(private builder:FormBuilder ) { }

  ngOnInit(): void {
    this.form=this.builder.group(
      {
      UserName:['',[Validators.required]],
      Email:['',[Validators.required,Validators.email]],
      Phone:['',[Validators.required],Validators.minLength(15)],
      Password:['',[Validators.required]],
      ConfirmPassword:['',[Validators.required]],

    },
    )
  }
  add(){
    console.log(this.form.value)
  }

}
