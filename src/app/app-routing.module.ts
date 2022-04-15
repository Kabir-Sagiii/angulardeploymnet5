import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatappComponent } from './Components/chatapp/chatapp.component';
import { CategoryComponent } from './ShoppingCart/category/category.component';
import { ElectronicsComponent } from './ShoppingCart/electronics/electronics.component';
import { HomeComponent } from './ShoppingCart/home/home.component';
import { JewellaryComponent } from './ShoppingCart/jewellary/jewellary.component';
import { LoginComponent } from './ShoppingCart/login/login.component';
import { MensclothingComponent } from './ShoppingCart/mensclothing/mensclothing.component';
import { PagenotFoundComponent } from './ShoppingCart/pagenot-found/pagenot-found.component';
import { ProductsComponent } from './ShoppingCart/products/products.component';
import { ReativeFormsComponent } from './ShoppingCart/reative-forms/reative-forms.component';
import { RegisterComponent } from './ShoppingCart/register/register.component';
import { SingleproductDetailsComponent } from './ShoppingCart/singleproduct-details/singleproduct-details.component';
// import {HeaderComponent} from '../app/Components/header/header.component'
// import { NgSwitchComponent } from './Components/ng-switch/ng-switch.component';
// import { NgforfetchComponent } from './Components/ngforfetch/ngforfetch.component';


const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  {
    path:"products",component:ProductsComponent
  },
  {
    path:"category",component:CategoryComponent,children:[
       {
          path:"electronics",component:ElectronicsComponent
       },
       {
        path:"jewellary",component:JewellaryComponent
       },
       {
        path:"mensClothing",component:MensclothingComponent
       }

    ]
  },
  {
    path:"chatapp",component:ChatappComponent
  },
  {
    path:"RF",component:ReativeFormsComponent
  },
  {
    path:"register",component:RegisterComponent
  },
  {
    path:"login",component:LoginComponent
  },
   {
    path:"singleproduct/:id",component:SingleproductDetailsComponent
  },
  {
    path:"**",component:PagenotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
