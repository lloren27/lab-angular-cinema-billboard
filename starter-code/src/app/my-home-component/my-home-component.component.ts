import { Component, OnInit } from '@angular/core';
import { ServicecreationService } from '../servicecreation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']

})
export class MyHomeComponentComponent implements OnInit {

 moviesArray : Object;
  constructor(private theService: ServicecreationService, public router: Router) { 
    this.moviesArray = this.theService.getMovies();
  }

  ngOnInit() {
    
  }
  goToMovie(id) {
    this.router.navigate(['movie',id]);  
  }
}
