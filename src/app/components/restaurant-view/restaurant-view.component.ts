import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-restaurant-view',
  templateUrl: './restaurant-view.component.html',
  styleUrls: ['./restaurant-view.component.scss']
})
export class RestaurantViewComponent implements OnChanges {

  @Input() businesses: Observable<any>;
  allBusinesses: any[];
  currentIndex: number = 0;
  currentBusiness: any;
  loading: boolean = true;

  constructor() { }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['businesses']) {
      this.loading = true;
      this.businesses.subscribe((data) => {
        this.allBusinesses = this.shuffle(data.search.business);
  
        console.log(JSON.stringify(this.allBusinesses));
        this.currentBusiness = this.allBusinesses[this.currentIndex];
        this.loading = false;
      }); 
    }
  }

  next() {
    if (this.currentIndex !== this.allBusinesses.length - 1) {
      this.currentIndex += 1;
    } else {
      window.alert('You went through all the search results and could not find anything? You must be really picky. Try refreshing and changing your search. Otherwise I am just going to keep going through this same list');
      this.currentIndex = 0;
    }

    this.currentBusiness = this.allBusinesses[this.currentIndex];
  }

  openMap() {
    window.open(`http://maps.google.com/maps?q=${this.currentBusiness.coordinates.latitude},${this.currentBusiness.coordinates.longitude}`, '_blank');
  }
}
