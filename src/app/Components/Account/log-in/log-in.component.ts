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
    log.Email=this.form.value["Email"]
    log.Password=this.form.value["Password"]
    this.acc.login(log).subscribe(res=>{
      if(res.success){
        console.log(res.data);
        localStorage.setItem('token',res.data.token);
        localStorage.setItem('userId',res.data.userId);
        localStorage.setItem('username',log.Email);
        this.router.navigateByUrl('/')
        console.log(res);
      }else{
        alert('try Again!!');
        console.log(res);
      }
    },err=>console.log(err))
  }

}
