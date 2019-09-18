import { User } from './../../../../models/user';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(
    // required to pass data into dialog component
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {

  }

}
