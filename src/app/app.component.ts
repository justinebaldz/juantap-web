import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 
  navItems: any;

  constructor() {
    this.navItems = [
      {
        name: 'Home',
        link: "/",
        icon: ""
      },
      {
        name: 'About',
        link: "/about",
        icon: ""
      },
      {
        name: 'Contact',
        link: "/contact",
        icon: ""
      },
      {
        name: 'Help',
        link: "/help",
        icon: ""
      },
      {
        name: 'Download',
        link: "/download",
        icon: ""
      },
      {
        name: 'Login',
        link: "/login",
        icon: ""
      }
    ];
  }
}
