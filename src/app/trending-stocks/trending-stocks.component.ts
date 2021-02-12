import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-trending-stocks',
  templateUrl: './trending-stocks.component.html',
  styleUrls: ['./trending-stocks.component.css']
})
export class TrendingStocksComponent implements OnInit {

  constructor(private authService : AuthService) { }
  stocks =[];
  ngOnInit(): void {
    this.authService.getTrendingStocks().subscribe(
      res => this.stocks=res,
      err => console.log(err)    
    )
    console.log(this.stocks);
      }
}
