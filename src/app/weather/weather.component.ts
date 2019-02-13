import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  searchCity :string ="bangalore,IN";
  constructor(private sharedService :SharedService) { }

  ngOnInit() {
    this.sharedService.weatherService(this.searchCity)
                        .subscribe( (resp) => {
                          console.log(resp)
                      });
  }

}
