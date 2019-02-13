import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  cur :any = "USD";
  constructor(private sharedService:SharedService) { }

  ngOnInit() {
    this.sharedService.currencyService(this.cur)
    .subscribe((resp) =>{
      console.log(resp);
    })
  }

}
