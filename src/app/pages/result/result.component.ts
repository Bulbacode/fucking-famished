import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from 'src/app/services/places.service';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  radius: number;
  isMiles: boolean;

  location: any = {};

  loading: boolean;
  mapsUrl: string;

  noData: boolean;

  constructor(private route: ActivatedRoute, private places: PlacesService, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {

        if (params.location) {
          const decoded = decodeURIComponent(params.location);
          this.location = JSON.parse(decoded);
          if (this.location) {
            this.noData = false;
            this.mapsUrl = this.buildMapsUrl();
          } else {
            this.noData = true;
          }
          
        } else if (params.radius && params.isMiles) {
          this.radius = params.radius;
          this.isMiles = params.isMiles;

          this.search();
        } else {
          this.noData = false;
        }
      }
    );
  }
  
  buildMapsUrl() {
    return `https://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=${this.location.geometry.location.lat},${this.location.geometry.location.lng}`
  }

  navigateToMaps() {
    window.open(this.mapsUrl, "_blank");
  }

  async search() {
    this.loading = true;

    const locationsPromise = await this.places.getNearbyLocations(this.radius, this.isMiles);
    locationsPromise.subscribe(location => {
  
      this.router.navigate(['/result'], {queryParams: { location: encodeURIComponent(JSON.stringify(location)) }});
      this.loading = false;
    });
    
    
  }

}
