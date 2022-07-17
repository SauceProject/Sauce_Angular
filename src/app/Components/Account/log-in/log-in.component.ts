import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginViewModel } from 'src/app/models/Login';
import { AccountServices } from 'src/app/Services/Account';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  form:FormGroup=new FormGroup([]);
  constructor(private builder:FormBuilder,private acc:AccountServices,private router:Router) { }

  ngOnInit(): void {
    this.form=this.builder.group(
      {
      Email:['',[Validators.required,Validators.email]],
      Password:['',[Validators.required]]
    },
    )

  }
  add(){
    let log =new LoginViewModel();
    log.UserName=this.form.value["Email"]
    log.Password=this.form.value["Password"]
    this.acc.login(log).subscribe(res=>{
      if(res.Success){
        localStorage.setItem('token',res.data);
        localStorage.setItem('username',log.UserName);
        this.router.navigateByUrl('/')
      }else{
        alert('try Again!!');
      }
    },err=>alert(err))
  }

}
