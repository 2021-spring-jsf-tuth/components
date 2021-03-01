import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-kkh-snackbar',
  templateUrl: './kkh-snackbar.component.html',
  styleUrls: ['./kkh-snackbar.component.css']
})
export class KkhSnackbarComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 500,
    });
  }

  ngOnInit(): void {
  }

}
