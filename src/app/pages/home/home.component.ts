import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewChildren, Directive, Input } from '@angular/core';
import { PlacesService } from 'src/app/services/places.service';

import {MatSliderModule} from '@angular/material/slider';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  radius: number = 15;
  isMiles: boolean = true;

  constructor(private router: Router) {
    
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  search() {

    this.router.navigate(['/result'], { queryParams: { radius: this.radius, isMiles: this.isMiles }});
  }
}
