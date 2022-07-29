import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EditProfileViewModel } from 'src/app/models/EditProfile';
import { SignUpViewModel } from 'src/app/models/SignUp';
import { AccountServices } from 'src/app/Services/Account';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private builder:FormBuilder,private acc:AccountServices,private router:Router) { }
  form:FormGroup=new FormGroup([]);
  profile:SignUpViewModel = new SignUpViewModel();
  ngOnInit(): void {
    this.profileInfo()
    this.form=this.builder.group(
      {
        NameEN:['',[Validators.required]],
        NameAR:['',[Validators.required]],
        Role:['',[Validators.required]],
        Email:['',[Validators.required]],
        Phone:['',[Validators.required]],

    });
  }
  profileInfo(){
    this.acc.GetUserInfo(this.acc.getCurrentUserId()).subscribe(res =>{ 
      console.log(res)
      this.profile=res.data[0]

    })
  }

  add(){
    let SignUP =new EditProfileViewModel();
    SignUP.NameEN=this.form.value["NameEN"];
    SignUP.NameAR=this.form.value["NameAR"];
    SignUP.Email=this.form.value["Email"];
    SignUP.phone=this.form.value["Phone"];
    SignUP.Role="User";
    SignUP.id=this.acc.getCurrentUserId();
    console.log(SignUP);

    this.acc.EditProfile(SignUP,this.acc.getCurrentUserId()).subscribe(res=>{
    //this.acc.EditProfile(SignUP,'Admin').subscribe(res=>{
      console.log(res)
      console.log(this.acc.getCurrentUserId())
      if(res.success){
        this.router.navigateByUrl('UserAPI/SignIn')
      }
      else{
        console.log(res)
        console.log('res')
        alert('Try again!!!!!!!')
        console.log(this.form.errors)
      }
    },err=>{
      console.log(err);
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
