import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { YelpService } from 'src/app/services/yelp.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public step: number;
  public distance: number;
  public isUrgent: boolean;
  public price: number[];
  public displayPrice: string[];
  public showPrice: boolean;
  public extras: any;
  public total: number;
  public businesses: Observable<any>;
  public loading: boolean = false;

  constructor(
    public yelp: YelpService
  ) {
    this.step = 1;
  }

  ngOnInit(): void {
    this.price = [];
    this.displayPrice = [];
    this.showPrice = false;
  }

  onDistance(distance: number) {
    this.step += 1;
    this.distance = distance;
  }

  onUrgency(isUrgent: boolean) {
    this.step += 1;
    this.isUrgent = isUrgent;
  }

  onPrice(price: number[]) {
    this.step += 1;
    this.price = [...price];
    this.showPrice = true;

    this.price.forEach(element => {
      if (element == 1) {
        this.displayPrice.push('$');
      }
      if (element == 2) {
        this.displayPrice.push('$$');
      }
      if (element == 3) {
        this.displayPrice.push('$$$');
      }
      if (element == 4) {
        this.displayPrice.push('$$$$');
      }
    });
  }

  onExtras(extras: any) {
    this.extras = extras;
    this.step += 1;
    this.search();
  }

  search() {
    this.loading = true;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const config: any = {
          lat: position.coords.latitude,
          long: position.coords.longitude,
          rad: this.distance,
          price_range: this.price.toString(),
          is_urgent: this.isUrgent,
          open_to_all: this.extras.open_to_all,
          neutral_restrooms: this.extras.restroom,
          wheelchair_accessible: this.extras.wheelchair
        };

        this.businesses = this.yelp.search(config);

      }, (error) => {
        window.alert('There was an error getting your location, please try again');
        console.log(error);
    });
    } else {
      window.alert("Geolocation is not supported by this browser.");
    }

    this.loading = false;
  }
}
