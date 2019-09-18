import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Commons modules (Flex, Material)
import { SharedModulesModule } from './modules/shared-modules/shared-modules.module';


@NgModule({
   declarations: [
      AppComponent
    ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      BrowserAnimationsModule,
      SharedModulesModule
   ],
     providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
