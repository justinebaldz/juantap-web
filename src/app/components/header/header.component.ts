import { Component, OnInit } from '@angular/core';
import { LinkService } from 'src/app/services/link.service';
import { ScrollService } from 'src/app/services/scroll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navItems: any;
  menu: boolean;
  isLogin: boolean;

  constructor(
    private linkService: LinkService,
    private scrollService: ScrollService,
    private router: Router
  ) {
    this.navItems = [
      {
        name: 'Home',
        link: '/',
        icon: '',
      },
      {
        name: 'About',
        link: '/about',
        icon: '',
      },
      {
        name: 'Contact',
        link: '/contact',
        icon: '',
      },
      {
        name: 'Help',
        link: '/faqs',
        icon: '',
      },
      {
        name: 'Download',
        link: '/download',
        icon: '',
      },
      {
        name: 'Login',
        link: '/login',
        icon: '',
      },
    ];

    this.menu = false;
    this.isLogin = false;
    this.navItems = this.linkService.navItems;
  }

  showMenu(): void {
    if (this.menu === true) this.menu = false;
    else this.menu = true;
  }

  linkClick() {
    this.menu = !this.menu;
    this.isLogin = !this.isLogin;
  }

  signIn(): void {
    this.isLogin = true;
  }

  scrollToId(id: string) {
    this.scrollService.scrollToElementById(id);
    this.isLogin = false;
  }

  ngOnInit(): void {}
}
