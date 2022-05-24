import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { OrderdetailsService } from '../services/orderdetails.service';
import { MenupageComponent } from './menupage/menupage.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MenuComponent,
    MenupageComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    FormsModule
  ],
  providers: [OrderdetailsService],
})
export class MenuModule { }
