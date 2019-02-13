import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movieName : string ;
  constructor(private sharedService  : SharedService) { }

  ngOnInit() {
          this.sharedService.moviesService(this.movieName)
          .subscribe( (resp) => {
            console.log(resp)
        });
  }

}
