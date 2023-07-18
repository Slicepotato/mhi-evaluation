import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import { FetchService } from './fetch.service';
import { HomeComponent } from './components/home/home.component';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { SingleEmployeeDataComponent } from './components/single-employee-data/single-employee-data.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    SingleEmployeeDataComponent,
    HomeComponent,
    AppHeaderComponent,
    AppFooterComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
