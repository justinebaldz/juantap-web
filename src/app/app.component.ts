import { Component } from '@angular/core';
import { ScrollService } from './services/scroll.service';
import { LinkService } from './services/link.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 
  navItems: any;
  menu: boolean;
  test: any;

  constructor(
    private scrollService: ScrollService,
    private linkService: LinkService,
    private router: Router
  ) {
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
        link: "/faqs",
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

    this.menu = false;
    this.navItems = this.linkService.navItems;
    this.test = "/test";
  }

  showMenu(): void { 
    if (this.menu === true) 
      this.menu = false;
    else this.menu = true; 
  }

  scrollToId(id: string) { 
    this.scrollService.scrollToElementById(id);  
  }

  linkClick(item: any) {
    this.router.navigate([item['link']]); 
    this.linkService.setNavItem(item);
  }
}
