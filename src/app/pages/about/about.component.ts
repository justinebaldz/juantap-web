import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  objectives: any;

  constructor() {
    this.objectives = [
      'To easily pay fare in jeepney without risking health in the middle of pandemic.',
      'To provide efficient, convenient and hassle-free transaction.',
      'To Easily manage the transactions history of the Fare rates to ensure that they paying the exact amount.',
      'To have a solution to a common problem of jeepney drivers like passengers who don’t pay fare and handling fast and exact change.',
      'To monitor the daily sale of the driver anytime.',
    ];
  }

  ngOnInit(): void {}
}
