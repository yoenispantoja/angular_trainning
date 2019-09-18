import { UserService } from './../../services/user.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserRoutingModule } from './user.routing';
import { SharedModulesModule } from '../shared-modules/shared-modules.module';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModulesModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    UserComponent,
    UserDetailsComponent
  ],
  providers: [
    UserService
  ],
  entryComponents: [UserDetailsComponent]
})
export class UserModule { }
