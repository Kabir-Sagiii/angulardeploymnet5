import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { MainComponent } from './Components/main/main.component';
import { FooterComponent } from './Components/footer/footer.component';
import { InterpolationComponent } from './Components/interpolation/interpolation.component';
import { NavComponent } from './Components/nav/nav.component';
import { TwowayDBComponent } from './Components/twoway-db/twoway-db.component';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgIfComponent } from './Components/ng-if/ng-if.component';
import { NgForComponent } from './Components/ng-for/ng-for.component';
import { NgforfetchComponent } from './Components/ngforfetch/ngforfetch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatButtonModule} from '@angular/material/button';
import { AngularmaterialComponent } from './Components/angularmaterial/angularmaterial.component';
import {MatIconModule} from '@angular/material/icon';
import { NgSwitchComponent } from './Components/ng-switch/ng-switch.component';
import { NgswitchproductComponent } from './Components/ngswitchproduct/ngswitchproduct.component';
import { NgclassComponent } from './Components/ngclass/ngclass.component';
import { User1Component } from './Components/user1/user1.component';
import { User2Component } from './Components/user2/user2.component';
import { HomeComponent } from './ShoppingCart/home/home.component';
import { ProductsComponent } from './ShoppingCart/products/products.component';
import { CategoryComponent } from './ShoppingCart/category/category.component';
import { PagenotFoundComponent } from './ShoppingCart/pagenot-found/pagenot-found.component';
import { ElectronicsComponent } from './ShoppingCart/electronics/electronics.component';
import { JewellaryComponent } from './ShoppingCart/jewellary/jewellary.component';
import { ChatappComponent } from './Components/chatapp/chatapp.component';
import { ClientCComponent } from './Components/client-c/client-c.component';
import { ServerCComponent } from './Components/server-c/server-c.component';
import { ParentCCComponent } from './Components/parent-cc/parent-cc.component';
import { ChildCCComponent } from './Components/child-cc/child-cc.component';
import { LoginComponent } from './ShoppingCart/login/login.component';
import { RegisterComponent } from './ShoppingCart/register/register.component';
import { ReativeFormsComponent } from './ShoppingCart/reative-forms/reative-forms.component';
import {HttpClientModule} from '@angular/common/http';
import { MensclothingComponent } from './ShoppingCart/mensclothing/mensclothing.component';
import { SingleproductDetailsComponent } from './ShoppingCart/singleproduct-details/singleproduct-details.component';
import { LifecyclehooksComponent } from './Components/lifecyclehooks/lifecyclehooks.component';
import { ParentLCHComponent } from './Components/parent-lch/parent-lch.component';
import { ChildLCHComponent } from './Components/child-lch/child-lch.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    InterpolationComponent,
    NavComponent,
    TwowayDBComponent,
    NgIfComponent,
    NgForComponent,
    NgforfetchComponent,
    AngularmaterialComponent,
    NgSwitchComponent,
    NgswitchproductComponent,
    NgclassComponent,
    User1Component,
    User2Component,
    HomeComponent,
    ProductsComponent,
    CategoryComponent,
    PagenotFoundComponent,
    ElectronicsComponent,
    JewellaryComponent,
    ChatappComponent,
    ClientCComponent,
    ServerCComponent,
    ParentCCComponent,
    ChildCCComponent,
    LoginComponent,
    RegisterComponent,
    ReativeFormsComponent,
    MensclothingComponent,
    SingleproductDetailsComponent,
    LifecyclehooksComponent,
    ParentLCHComponent,
    ChildLCHComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule,
   BrowserAnimationsModule,
   MatButtonModule,
   MatIconModule,
   ReactiveFormsModule,
   HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
