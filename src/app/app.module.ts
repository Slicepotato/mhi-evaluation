import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FetchService } from './fetch.service';
import { HomeComponent } from '@app/components/home/home.component';
import { ListEmployeesComponent } from '@app/components/list-employees/list-employees.component';
import { SingleEmployeeDataComponent } from '@app/components/single-employee-data/single-employee-data.component';
import { AppHeaderComponent } from '@app/components/app-header/app-header.component';
import { AppFooterComponent } from '@app/components/app-footer/app-footer.component';
import { MainNavComponent } from '@app/components/main-nav/main-nav.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// import { GlobalErrorHandler } from '@app/errors/global-error-handler';
// import { HttpLoadingInterceptor } from '@app/errors/http-loading.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    SingleEmployeeDataComponent,
    ListEmployeesComponent,
    HomeComponent,
    AppHeaderComponent,
    AppFooterComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  /*
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLoadingInterceptor,
      multi: true,
    }
  ],*/
  bootstrap: [AppComponent, FetchService]
})
export class AppModule { }
