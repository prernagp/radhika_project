import { Component, OnInit } from '@angular/core';
import { OrderdetailsService } from '../services/orderdetails.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service: OrderdetailsService) { }
  foodData: any;
  ngOnInit(): void {
    console.log("menu");
    this.foodData = this.service.foodDetails;
    console.log(this.foodData);
  }
}
