import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleEmployeeDataComponent } from './single-employee-data/single-employee-data.component';

import { HttpClientModule } from '@angular/common/http';
import { FetchService } from './fetch.service';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    SingleEmployeeDataComponent,
    ListEmployeesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, FetchService]
})
export class AppModule { }
