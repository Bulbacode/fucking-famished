import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  tikTokLink: string = "https://www.tiktok.com/@bulbacode?lang=en";

  constructor() { }

  ngOnInit(): void {
  }

  sharePage() {
    
  }

  followOnSocialMedia() {
    window.open(this.tikTokLink, "_blank");
  }
}
