import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';
import { MenupageComponent } from './menupage/menupage.component';

const routes: Routes = [{
  path:'',
  component:MenuComponent
},
{
  path: 'list/:id',
  component: MenupageComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
