import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { LoginViewModel, SignUpViewModel } from 'src/app/models/Login';
import { SignUp } from 'src/app/models/SignUp';
import { AccountServices } from 'src/app/Services/Account';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor(private builder:FormBuilder,private acc:AccountServices,private router:Router) { }
  form:FormGroup=new FormGroup([]);

  ngOnInit(): void {
    this.form=this.builder.group(
      {
        UserName:['',[Validators.required]],
        Email:['',[Validators.required]],
        Phone:['',[Validators.required]],
        Password:['',[Validators.required]],
        ConfirmPassword:['',[Validators.required],],
    });
  }
  add(){
    let SignUP =new SignUpViewModel();
    SignUP.Name=this.form.value["UserName"];
    SignUP.UserName=this.form.value["Email"];
    SignUP.phone=this.form.value["Phone"];
    SignUP.Password=this.form.value["Password"];
    SignUP.ConfirmPassword=this.form.value["ConfirmPassword"];
    console.log(SignUP);

    this.acc.SignUp(SignUP).subscribe(res=>{
      console.log(res)
      if(res.Success){
        this.router.navigateByUrl('/login')
      }
      else{
        alert('Try again!!!!!!!')
        console.log(this.form.errors)
      }
    },err=>{
      alert(err);
    })
  }
}
