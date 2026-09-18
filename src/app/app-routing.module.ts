import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'',component:BlankLayoutComponent,title:'Blank Layout',
    children:[
    {path:'home',component:HomeComponent,title:'Home'},
    {path:'cart',component:CartComponent},
    {path:'products',component:ProductsComponent,title:'products'},
    {path:'categories',component:CategoriesComponent,title:'categories'},
    {path:'brands',component:BrandsComponent,title:'brands'},
  ]},
  {
    path:'',component:AuthLayoutComponent,title:'Auth',
    children:[
      {path:'login',component:LoginComponent,title:'Login'},
      {path:'register',component:RegisterComponent,title:'Register'},
    ]
  },
  {path:'**',component:NotfoundComponent,title:'Not Found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
