import { Component, OnInit } from '@angular/core';
import { OrderdetailsService } from '../services/orderdetails.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: OrderdetailsService) { }
  foodData:any;
  ngOnInit(): void {
    console.log("Home");
    this.foodData = this.service.foodDetails;
    console.log("Home:- ", this.foodData);
  }
}
