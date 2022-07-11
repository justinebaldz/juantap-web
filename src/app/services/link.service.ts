import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  activeNavItemSubject$: Subject<string>;
  navItems: any;

  constructor(
    private router: Router
  ) { 
    this.activeNavItemSubject$ = new Subject();

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
  }

  setNavItem(newItem: any){
    this.activeNavItemSubject$.next(newItem);
    // console.log(newItem);
  }
}
