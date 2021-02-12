import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { TrendingStocksComponent } from './trending-stocks/trending-stocks.component';


const routes: Routes = [
  {
    path: 'login', component: LoginPageComponent
  },
  {
    path: 'dashboard', component: DashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'trending-stocks', component: TrendingStocksComponent,
    canActivate:[AuthGuard]
  },

  {
    path:'',redirectTo:"login",pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
