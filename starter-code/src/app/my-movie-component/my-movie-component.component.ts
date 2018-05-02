import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ServicecreationService } from '../servicecreation.service';




@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {
 movieDetail:Object;
  constructor(private theService: ServicecreationService,public router: Router,public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.movieDetail = this.theService.getMovie(Number(params['id']));
  })

} 
}
