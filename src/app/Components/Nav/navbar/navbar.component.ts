import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountServices } from 'src/app/Services/Account';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private LogOutt: AccountServices, private http: HttpClient) { 
    this.LogOutt.getLooggedStatus().subscribe(
      res => this.isloog = res
    )
  }
  isloog = true;

  ngOnInit(): void {
    this.LogOutt.getLooggedStatus().subscribe(
      res => this.isloog = res
    )
  }
  LogOut() {
    let token = localStorage.getItem("token");
    this.LogOutt.LogOut(token!).subscribe(res => { console.log(res) })
    this.LogOutt.setLooggedStatus(false);
    localStorage.removeItem("token");
  }
}
