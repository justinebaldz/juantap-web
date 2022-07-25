import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '650px',
      height: '600px',
      disableClose: true,
    });
  }
  ngOnInit(): void {}
}
