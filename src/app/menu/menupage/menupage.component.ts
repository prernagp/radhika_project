import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderdetailsService } from '../../services/orderdetails.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  menuOption(item: any)
  {
    console.warn(item);
  }

  constructor(private param: ActivatedRoute,
    private service: OrderdetailsService) { }
  getMenuId: any;
  menuData: any;
  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
      this.menuData =  this.service.foodDetails.filter((value)=>{
        return value.id == this.getMenuId;
      });
      console.log(this.menuData,'menudata>>');
      
    }
  }

}
