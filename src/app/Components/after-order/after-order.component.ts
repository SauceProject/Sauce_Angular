import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountServices } from 'src/app/Services/Account';

@Component({
  selector: 'app-after-order',
  templateUrl: './after-order.component.html',
  styleUrls: ['./after-order.component.css']
})
export class AfterOrderComponent implements OnInit {

  constructor(private acc:AccountServices,private router:Router) { }

  ngOnInit(): void {

  }

}
