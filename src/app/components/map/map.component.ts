import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/analytics';

@Component({
  selector: 'google-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {

  @Input() location: any;
  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;

  coords : google.maps.LatLng;
  mapOptions: any;
  map: google.maps.Map;
  marker: google.maps.Marker;

  constructor(private analytics: AngularFireAnalytics) { }

  ngOnInit(): void {
    this.coords = new google.maps.LatLng(this.location.geometry.location.lat, this.location.geometry.location.lng);
    this.mapOptions = {
      center: this.coords,
      zoom: 20,
    };
    this.marker = new google.maps.Marker({
      position: this.coords,
      map: this.map,
    });
  }

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, 
    this.mapOptions);

    this.marker.setMap(this.map);

    this.analytics.logEvent('load_map');
  }

}
