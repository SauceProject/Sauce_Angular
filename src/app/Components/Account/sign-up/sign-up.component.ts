import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { LoginViewModel} from 'src/app/models/Login';
import { SignUpViewModel } from 'src/app/models/SignUp';
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
        NameEN:['',[Validators.required]],
        NameAR:['',[Validators.required]],
        Role:['',[Validators.required]],
        Email:['',[Validators.required],Validators.email],
        Password:['',[Validators.required]],
        ConfirmPassword:['',[Validators.required],],
        Phone:['',[Validators.required],Validators.maxLength(11)],
    });
  }


  add(){
    let SignUP =new SignUpViewModel();
    SignUP.NameEN=this.form.value["NameEN"];
    SignUP.NameAR=this.form.value["NameAR"];
    SignUP.Role=this.form.value["Role"];
    SignUP.Email=this.form.value["Email"];
    SignUP.Password=this.form.value["Password"];
    SignUP.ConfirnmPassword=this.form.value["ConfirmPassword"];
    SignUP.phone=this.form.value["Phone"];
    console.log(SignUP);

    this.acc.SignUp(SignUP).subscribe(res=>{
      console.log(res)
      console.log('www')
      if(res.Success){
        this.router.navigateByUrl('UserAPI/SignIn')
      }
      else{
        console.log(res)
        console.log('res')
        alert('Try again!!!!!!!')
        console.log(this.form.errors)
      }
    },err=>{
      alert(err);
    })
  }

  onPasswordChange() {
    if (this.confirm_password.value == this.password.value) {
      this.confirm_password.setErrors(null);
    } else {
      this.confirm_password.setErrors({ mismatch: true });
    }
  }

  get password() {
    return this.form.controls['Password'];
  }

  get confirm_password() {
    return this.form.controls['ConfirmPassword'];
  }

}
