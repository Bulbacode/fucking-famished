import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';

// Example API Call
// https://maps.googleapis.com/maps/api/place/nearbysearch/json?
// location=-33.8670522,151.1957362
// &radius=1500 -- in meters
// &type=restaurant
// &keyword=cruise -- most likely not needed
// &key=YOUR_API_KEY


@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private currentLocation: any;

  constructor(private http: HttpClient) {
  }

  async getNearbyLocations(radius: number, isMiles: boolean): Promise<Observable<any>> {
    return new Promise<Observable<any>>(async (resolve, reject) => {
      const url: string = await this.buildQueryUrl(radius, isMiles);

      resolve(this.http.get<any>(url));
    });
  }

  updateLocation(): Promise<any> {
    return new Promise((resolve, reject) => {
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos: any) => {
          this.currentLocation = pos;
          resolve(this.currentLocation);
        }, (err: any) => {
          reject(err);
        }, { maximumAge:60000, timeout:5000, enableHighAccuracy:true });
      }
    });
  }

  convertMilesToMeters(meters: number): number {
    return Math.round((meters / 0.00062137));
  }

  async buildQueryUrl(radius: number, isMiles: boolean): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {

      if(isMiles) {
        radius = this.convertMilesToMeters(radius);
      }
  
      if(!this.currentLocation) {
        this.currentLocation = await this.updateLocation().catch((err) => {
          reject(err);
        });
      }
  
      resolve(`${environment.apiUrl}/nearbyFood/${radius}/${this.currentLocation.coords.latitude}/${this.currentLocation.coords.longitude}`);
    });
    
  }
}
