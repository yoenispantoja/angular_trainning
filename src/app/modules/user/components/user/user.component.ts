import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import 'rxjs/add/operator/first';
import { User } from 'src/app/models/user';
import { UserService } from './../../../../services/user.service';
import { MatDialog, MatDialogConfig, MatPaginator, MatSort } from '@angular/material';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];
  subscriptionGetUser: Subscription; // para desuscribirse luego de enganchar el servicio

  // Working with Material-Tables
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'avatar', 'actions'];

  //For paginator
  dataSource = new MatTableDataSource<User>();

  //Paginator
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private userService: UserService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  prepareTable() {
    this.dataSource.data = this.users;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getUsers() {
    this.subscriptionGetUser = this.userService.getUsers().subscribe(data => {
      this.users = data['data'];
      this.prepareTable();
    },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Ha ocurrido un error ', err.error.message);
        } else {
          console.log(`El servidor ha devuelto un codigo ${err.status}, con el argumento: ${err.error}`);
        }
      }
    );

  }

  //See more function

  seeMore(user: User) {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '600px';
    dialogConfig.data = user;

    this.dialog.open(UserDetailsComponent, dialogConfig);
  }

  ngOnDestroy(): void {
    this.users = [];
    this.subscriptionGetUser.unsubscribe();
  }

}
