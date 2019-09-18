import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModulesComponent } from './shared-modules.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatGridListModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule,
    FlexLayoutModule

  ],
  exports:[
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule,
    FlexLayoutModule
  ],
  declarations: [
    SharedModulesComponent
    ]
})
export class SharedModulesModule { }
